"use client";

import { useState } from "react";
import Link from "next/link"; // Next.js semantic routing optimization
import { Check, ArrowRight } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const router= useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    
    e.preventDefault();
   

    // Grab field data safely out of FormData entries
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    const name = formData.name ;
    const email = formData.email ;
    const passwordInput = formData.password ;

    // Direct interface call with Better Auth
    const { data, error } = await authClient.signUp.email({
      email,
      password: passwordInput,
      name,
       
    });
    if(!error){
     router.push('/login')
    }

    setLoading(false);

    if (error) {
      setFormError(error.message || "An error occurred during sign up.");
      return;
    }

    if (data) {
      console.log("Logged in successfully:", data);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-900 py-10">
      <Form
        className="flex w-full max-w-md flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1 mb-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Create an account</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Enter your details below to get started.</p>
        </div>

        <hr className="border-zinc-100 dark:border-zinc-800" />

        {/* Global Error Banner if API transaction throws an error */}
        {formError && (
          <div className="p-3 text-sm font-medium text-danger bg-danger-50 dark:bg-danger-950/30 rounded-xl border border-danger-200 dark:border-danger-900/50">
            {formError}
          </div>
        )}

        {/* Name Field */}
        <TextField
          isRequired
          name="name"
          className="flex flex-col gap-1.5"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</Label>
          <Input placeholder="John Doe" disabled={loading} />
          <FieldError className="text-xs text-danger" />
        </TextField>

        {/* Email Field */}
        <TextField
          isRequired
          name="email"
          type="email"
          className="flex flex-col gap-1.5"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</Label>
          <Input placeholder="john@example.com" disabled={loading} />
          <FieldError className="text-xs text-danger" />
        </TextField>

        {/* Password Field */}
        <TextField
          isRequired
          name="password"
          type="password"
          className="flex flex-col gap-1.5"
          onChange={(value) => setPassword(value)}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</Label>
          <Input placeholder="Enter your password" disabled={loading} />
          <Description className="text-xs text-zinc-400 dark:text-zinc-500">
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError className="text-xs text-danger" />
        </TextField>

        {/* Confirm Password Field */}
        <TextField
          isRequired
          name="confirmPassword"
          type="password"
          className="flex flex-col gap-1.5"
          validate={(value) => {
            if (value !== password) {
              return "Passwords do not match";
            }
            return null;
          }}
        >
          <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Confirm Password</Label>
          <Input placeholder="Re-enter your password" disabled={loading} />
          <FieldError className="text-xs text-danger" />
        </TextField>

        {/* Action Controls */}
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex gap-3">
            <Button type="submit" color="primary" className="flex-1" isLoading={loading}>
              {!loading && <Check className="mr-1" />}
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
            <Button type="reset" variant="flat" className="px-4" disabled={loading}>
              Reset
            </Button>
          </div>
          
          {/* Navigation link using native Next.js router engine */}
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Already registered?{" "}
            <Link 
              href="/login" 
              className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
            >
              Log in
              <ArrowRight size={14} />
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}