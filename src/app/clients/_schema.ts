import { z } from "zod";
import { yearMonthStringToDate } from "~/lib/utils";

export const GenericStringConstraint = z.string().min(1).max(30);

export const clientFormSchema = z.object({
  firstName: GenericStringConstraint,
  lastName: GenericStringConstraint,
  email: z.string().email(),

  // lastReminder will enforce the format "YYYY-MM" and then transform into a Date
  lastReminder: z
    .string()
    .refine((value) => /^\d{4}-\d{2}$/.test(value), {
      params: { i18n: "InvalidDate" },
    })
    .transform((val, ctx): Date => {
      const date = yearMonthStringToDate(val);
      if (date === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_date,
        });
        return z.NEVER;
      }
      return date;
    }),

  reminderFrequency: z.enum(["semiannual", "annual"]),
});

export const clientSchema = clientFormSchema.extend({
  id: GenericStringConstraint,
  registrationDate: z.coerce.date(),
  lastReminder: z.coerce.date(),
});

export type ClientForm = z.infer<typeof clientFormSchema>;
export type Client = z.infer<typeof clientSchema>;
