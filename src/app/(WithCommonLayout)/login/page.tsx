/* eslint-disable import/order */
"use client";
import { Button } from "@nextui-org/button";

import Link from "next/link";

import FXForm from "@/src/components/form/FXForm";

import FXInput from "@/src/components/form/FXInput";

import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import loginValidationSchema from "@/src/schemas/login.schema";
export default function page() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h1 className="my-2 text-2xl font-bold">Login with FoundX</h1>
      <p className="mb-4">WelCome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FXForm
          onSubmit={onSubmit}
          resolver={zodResolver(loginValidationSchema)}
        >
          <div className="py-3">
            <FXInput name="email" label="Email" type="email" />
          </div>
          <div className="py-3">
            <FXInput name="password" label="Password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default-100 font-semibold"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </FXForm>
        <div>
          Don&lsquo;t have account? <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
}
