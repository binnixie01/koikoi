"use client"
import { LoginSchema } from "@/schemas"
import CardWrapper from "./cardwrapper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/ui/login-error"
import { FormSuccess } from "@/components/ui/login-success"
// import { login } from "@/actions/login"
import { useTransition } from 'react';
import { signIn } from "@/auth"

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "123@abc.com",
      password:"password"
    },
  })
  const onSubmit=(values:z.infer<typeof LoginSchema>)=>{
    // startTransition(()=>{ login(values)})
  }
  const [isPending, startTransition] = useTransition();

  return (
    <CardWrapper
    headerLabel="Welcome Back"
    backButtonlabel="Don't have an account?"
    backButtonHref="/register"
    showSocial={true} >
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
       className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="123@gmail.com" type="email" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="enter password" {...field} type="password" disabled={isPending}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError/>
        <FormSuccess />
        <Button className="w-full" type="submit" disabled={isPending}>Log In</Button>
      </form>
    </Form>
    </CardWrapper>
  )
}

