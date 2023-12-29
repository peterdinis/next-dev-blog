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
    
    return (
        <>
            
        </>
    );
};

export default LoginComponent;
