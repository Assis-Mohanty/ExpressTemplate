import z from "zod";
import { AnyZodObject } from "zod/v3";

export const pingSchema=z.object({
    message:z.string().min(1)
})
