"use client";

import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link'
import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from 'react';
import React from 'react';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({ name: "", email: "", password: "" });

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };
  const [error, setError] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit}>
    {error && (
      <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
    )}
    <div className="mb-6">
      <input
        required
        type="name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        placeholder="Name"
      />
    </div>
    <div className="mb-6">
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        placeholder="Email address"
      />
    </div>
    <div className="mb-6">
      <input
        required
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        placeholder="Password"
      />
    </div>
    <button
      type="submit"
      style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
      className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
      disabled={loading}
    >
      {loading ? "loading..." : "Sign Up"}
    </button>

    <button
        type='button'
        className='w-full'
        onClick={loginWithGoogle}
        disabled={isLoading}>
        {isLoading ? null : 
        <svg viewBox='0 0 24 24'>
        <path
          d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
          fill='#4285F4'
        />
        <path
          d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
          fill='#34A853'
        />
        <path
          d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
          fill='#FBBC05'
        />
        <path
          d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
          fill='#EA4335'
        />
        <path d='M1 1h22v22H1z' fill='none' />
      </svg>
      }
        Google
      </button>
  </form>
  )
}

export default SignIn
