import { ResourceNotFoundError } from "@/services/errors/resource_not_found_error";
import { makeEditFosterHomeService } from "@/services/factories/make_edit_foster_home_service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function edit(request: FastifyRequest, reply: FastifyReply) {
  const editFosterHomeBodySchema = z.object({
    fosterHomeId: z.string(),
    name: z.string(),
  });

  const { name, fosterHomeId } = editFosterHomeBodySchema.parse(request.body);

  try {
    const editFosterHomeService = makeEditFosterHomeService();

    await editFosterHomeService.execute({
      fosterHomeId,
      name,
    });
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(404).send({
        message: error.message,
      });
    }
    throw error;
  }

  return reply.status(204).send();
}
