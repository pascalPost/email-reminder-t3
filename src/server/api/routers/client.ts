import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { clientInsertSchema, clients } from "~/server/db/schema";

export const clientRouter = createTRPCRouter({
  create: publicProcedure
    .input(clientInsertSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(clients).values(input).returning();
    }),

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.query.posts.findFirst({
  //     orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  //   });
  // }),
});
