/* eslint-disable import/order */
"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";

import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import registerValidationSchema from "@/src/schemas/register.schema";
import { registerUser } from "@/src/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import { useEffect } from "react";

export default function RegisterPage() {
  // const mutation

  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
    data,
  } = useUserRegistration();

  // useEffect(()=>{
  //   if(isPending){
  //     // handle loading state
  //   }
  // },[isPending])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(userData);
  };

  if (isPending) {
    // handle loading
  }

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h1 className="my-2 text-2xl font-bold">Register with FoundX</h1>
      <p className="mb-4">Join us! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FXForm
          defaultValues={{
            name: "Sakib Kahadi Khan",
            email: "Sakib@gmail.com",
            mobileNumber: "01998597743",
            password: "123456",
          }}
          onSubmit={onSubmit}
          resolver={zodResolver(registerValidationSchema)}
        >
          <div className="py-3">
            <FXInput name="name" label="Name" type="text" />
          </div>
          <div className="py-3">
            <FXInput name="email" label="Email" type="email" />
          </div>
          <div className="py-3">
            <FXInput name="mobileNumber" label="Mobile Number" type="text" />
          </div>
          <div className="py-3">
            <FXInput name="password" label="Password" type="password" />
          </div>
          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default-100 font-semibold"
            size="lg"
            type="submit"
          >
            Register
          </Button>
        </FXForm>
        <div>
          Already have an account? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
