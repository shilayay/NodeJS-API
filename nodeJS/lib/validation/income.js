const { z } = require('zod');

const incomeIdValidation = z.string().regex(/^[a-fA-F0-9]{24}$/, {message: 'Invalid income ID'});

const incomeSchema =z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    description: z.string().optional(),
    amount: z.number().positive({ message: 'Amount must be a positive number' }),
    tag: z.enum(["salary", "bonus", "gift", "other"], { message: 'Invalid tag' }),
    currency: z.enum(["ILS", "USD", "EUR"], { message: 'Invalid currency' }).default("ILS")
  });
  
  module.exports = {incomeSchema, incomeIdValidation};
