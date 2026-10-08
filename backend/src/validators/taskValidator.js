import { z } from 'zod';

export const updateTaskStatusSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    status: z.enum(['Pending', 'In Progress', 'Completed'])
  })
});
