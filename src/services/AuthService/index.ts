"use server";
import { FieldValues } from "react-hook-form";
import { cookies } from "next/headers";

import axiosInstance from "@/src/lib/AxiosInstance";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      const serverError = error.response.data;

      // Log or return the server error message
      console.error(serverError.message || "An error occurred");

      // Return the error message for use in UI
      throw new Error(serverError.message || "Registration failed");
    }

    // Handle generic errors
    console.error(error.message || "An unexpected error occurred");
    throw new Error(error.message || "Registration failed");
  }
};
