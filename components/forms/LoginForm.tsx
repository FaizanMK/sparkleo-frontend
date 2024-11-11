"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  email: z.string().min(4, {
    message: "Email must be correct",
  }),
  password: z.string().min(8, {
    message: "password must be at least 8 characters",
  }),
});

const LoginForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="mail@simmmple.com" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Min 6 characters" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <div className="flex justify-center items-center ">
            <Checkbox />

            <p className="ml-3">Keep me logged in</p>
          </div>

          <p className="text-[#E92928] font-bold">Forget password?</p>
        </div>
        <Button
          variant="destructive"
          type="submit"
          className=" bg-[#E92928] text-white py-5 px-2 w-80 rounded-lg"
        >
          Sign In
        </Button>
        <p>
          Not registered yet?{" "}
          <span className="text-[#E92928] font-bold">Create an Account</span>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
