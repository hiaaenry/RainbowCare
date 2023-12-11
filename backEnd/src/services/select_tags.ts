import { UsersRepository } from "@/repositories/users_repository";
import { Tag, User } from "@prisma/client";
import { ResourceNotFoundError } from "./errors/resource_not_found_error";

interface SelectTagsRequest {
  userId: string;
  interested_tags: Tag[];
}

interface SelectTagsResponse {
  user: User;
}

export class SelectTags {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
    interested_tags,
  }: SelectTagsRequest): Promise<SelectTagsResponse> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    user.interested_tags = interested_tags;

    await this.usersRepository.save(user);

    return {
      user,
    };
  }
}
