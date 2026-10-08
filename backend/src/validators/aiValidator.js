import { z } from 'zod';

export const aiSearchSchema = z.object({
  query: z.object({
    q: z.string().min(1, 'Search query cannot be empty').max(500, 'Search query too long')
  })
});

export const meetingQuerySchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    query: z.string().min(1, 'Query cannot be empty').max(500, 'Query too long')
  })
});
