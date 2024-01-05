'use client';

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

const LoginComponent: FC = () => {
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
            const { error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });
            if (error) {
                toast({
                    variant: 'default',
                    duration: 2000,
                    className: 'bg-red-300',
                    title: error as unknown as string,
                });
            }
            router.push('/profile');
        } catch (err) {
            toast({
                variant: 'default',
                duration: 2000,
                className: 'bg-red-300',
                title: 'Login failed try again',
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
                            Login
                        </span>
                    </Link>
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
                        {!isLoading ? 'Login' : <Loader2 />}
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

export default LoginComponent;
