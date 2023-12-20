import { ResourceNotFoundError } from "@/services/errors/resource_not_found_error";
import { makeSelectTagsService } from "@/services/factories/make_select_tags_service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function selectTags(request: FastifyRequest, reply: FastifyReply) {
  const selectTagsProfileParamsSchema = z.object({
    userId: z.string().uuid(),
  });
  const selectTagsProfileBodySchema = z.object({
    interested_tags: z
      .enum([
        "JOB",
        "BOOTCAMP",
        "JOB",
        "BOOTCAMP",
        "HEALTH",
        "HOME",
        "LEISURE",
        "EDUCATION",
        "NEWS",
        "ENTERTAINMENT",
        "BIOGRAPHY",
        "EVENTS",
        "LIFESTYLE",
        "PSYCHOLOGY",
      ])
      .array(),
  });

  const { userId } = selectTagsProfileParamsSchema.parse(request.params);
  const { interested_tags } = selectTagsProfileBodySchema.parse(request.body);

  try {
    const selectTagsProfileService = makeSelectTagsService();

    await selectTagsProfileService.execute({
      userId,
      interested_tags,
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
