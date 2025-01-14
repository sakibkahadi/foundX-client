// src/schemas/register.schema.ts
import { z } from "zod";

const registerValidationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  mobileNumber: z
    .string()
    .regex(/^\d{10,15}$/, "Mobile number must be 10-15 digits")
    .nonempty("Mobile number is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

export default registerValidationSchema;
