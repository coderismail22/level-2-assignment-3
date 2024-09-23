import { z } from "zod";

const bookACarValidationSchema = z.object({
  body: z.object({
    carId: z
      .string({ required_error: "Car ID is required" })
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid Car ID format"), // ObjectId validation
    date: z
      .string({ required_error: "Date is required" })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }), // Validates date format
    startTime: z
      .string({ required_error: "Start time is required" })
      .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:mm)"), // 24-hour time format validation
  }),
});
