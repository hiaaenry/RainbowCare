import { makeSearchFosterHomeService } from "@/services/factories/make_search_foster_home_service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const searchFosterHomeQuerySchema = z.object({
    query: z.string(),
    page: z.coerce.number().min(1).default(1),
  });

  const { query, page } = searchFosterHomeQuerySchema.parse(request.query);

  const searchFosterHomeService = makeSearchFosterHomeService();
  const { fosterHomes } = await searchFosterHomeService.execute({
    query,
    page,
  });

  return reply.status(202).send({
    fosterHomes,
  });
}
