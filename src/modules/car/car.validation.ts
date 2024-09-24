import { z } from "zod";

// Create car validation
const createCarValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name is required" })
      .min(1, "Name cannot be empty"),
    description: z
      .string({ required_error: "Description is required" })
      .min(1, "Description cannot be empty"),
    color: z
      .string({ required_error: "Color is required" })
      .min(1, "Color cannot be empty"),
    isElectric: z.boolean({ required_error: "isElectric must be a boolean" }),
    status: z.enum(["available", "unavailable"], {
      required_error: "Status is required",
    }), // Enum validation
    features: z
      .array(z.string(), {
        required_error: "Features must be an array of strings",
      })
      .min(1, "At least one feature is required"),
    pricePerHour: z
      .number({ required_error: "Price per hour is required" })
      .positive("Price per hour must be a positive number"),
    isDeleted: z.boolean({ required_error: "isDeleted is required" }),
  }),
});

// Update car validation
const updateCarValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name is required" })
      .min(1, "Name cannot be empty"),
    description: z
      .string({ required_error: "Description is required" })
      .min(1, "Description cannot be empty"),
    color: z
      .string({ required_error: "Color is required" })
      .min(1, "Color cannot be empty"),
    isElectric: z.boolean({ required_error: "isElectric must be a boolean" }),
    //   status: z.enum(['available', 'unavailable'], {
    //     required_error: 'Status is required',
    //   }), // Enum validation
    features: z
      .array(z.string(), {
        required_error: "Features must be an array of strings",
      })
      .min(1, "At least one feature is required"),
    pricePerHour: z
      .number({ required_error: "Price per hour is required" })
      .positive("Price per hour must be a positive number"),
    isDeleted: z.boolean({ required_error: "isDeleted is required" }),
  }),
});

export const CarValidations = {
  createCarValidationSchema,
  updateCarValidationSchema,
};
