import { ResourceNotFoundError } from "@/services/errors/resource_not_found_error";
import { makeEditProfileService } from "@/services/factories/make_edit_profile_service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function edit(request: FastifyRequest, reply: FastifyReply) {
  const editProfileParamsSchema = z.object({
    userId: z.string().uuid(),
  });
  const editProfileBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  const { userId } = editProfileParamsSchema.parse(request.params);
  const { name, email } = editProfileBodySchema.parse(request.body);

  try {
    const editProfileService = makeEditProfileService();

    await editProfileService.execute({
      userId,
      name,
      email,
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
