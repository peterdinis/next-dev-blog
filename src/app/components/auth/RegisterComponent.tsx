"use client"

import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SignUpSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string(),
});

const RegisterComponent: FC = () => {
    const { toast } = useToast();
    const router = useRouter();
    const [submitError, setSubmitError] = useState('');
    const supabase = createClientComponentClient();
    const form = useForm<z.infer<typeof SignUpSchema>>({
        mode: 'onChange',
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit: SubmitHandler<z.infer<typeof SignUpSchema>> = async (
        formData,
    ) => {
        try {
            const { error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });
            if(error) {
                console.log(error);
            }
            toast({
                variant: 'default',
                duration: 2000,
                className: 'bg-green-300',
                title: 'Successfully register to app',
            });
            router.push('/login');
        } catch (err) {
            toast({
                variant: 'default',
                duration: 2000,
                className: 'bg-red-300',
                title: 'register failed try again',
            });
            console.log(err);
        }
    };

    return (
        <div className='min-h-full flex justify-center align-top dark:bg-[#1F1F1F]'>
        <Form {...form}>
            <form
                onChange={() => {
                    if (submitError) setSubmitError('');
                }}
                onSubmit={form.handleSubmit(onSubmit)}
                className='w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col'
            >
                <Link
                    href='/'
                    className='
        w-full
        flex
        justify-left
        items-center'
                >
                    <span
                        className='font-semibold
        dark:text-white text-4xl first-letter:ml-2'
                    >
                        Notion
                    </span>
                </Link>
                <FormDescription
                    className='
      text-foreground/60  dark:text-white'
                >
                    An all-In-One Collaboration and Productivity Platform
                </FormDescription>
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type='email'
                                    placeholder='Email'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type='password'
                                    placeholder='Password'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {submitError && <FormMessage>{submitError}</FormMessage>}
                <Button
                    type='submit'
                    className='w-full p-6'
                    size='lg'
                    disabled={isLoading}
                >
                    {!isLoading ? 'Register' : <Loader2 />}
                </Button>
                <span className='self-container  dark:text-white'>
                    Already have an account?{' '}
                    <Link href='/login' className='text-primary'>
                        Login
                    </Link>
                </span>
            </form>
        </Form>
    </div>
    );
};

export default RegisterComponent;
