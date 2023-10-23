import { ResourceNotFoundError } from "@/services/errors/resource_not_found_error";
import { makeDeleteUserProfileService } from "@/services/factories/make_delete_user_profile_service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function remove(request: FastifyRequest, reply: FastifyReply) {
  const deleteProfileParamsSchema = z.object({
    userId: z.string().uuid(),
  });

  const { userId } = deleteProfileParamsSchema.parse(request.params);

  try {
    const deleteProfileService = makeDeleteUserProfileService();

    await deleteProfileService.execute({
      userId,
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
