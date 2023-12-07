import { $Enums, Prisma, Role, Tag, User } from "@prisma/client";
import { UsersRepository } from "../users_repository";

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async catchEmailfindByTag(tags: $Enums.Tag[]) {
    const users = this.items.filter((user) =>
      user.interested_tags.some((tag) => tags.includes(tag))
    );

    if (users.length > 0) {
      return users[0].email;
    }

    return null;
  }

  async findById(id: string) {
    const user = this.items.find((item) => item.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: "user-id-1",
      name: data.name,
      last_name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
      role: Role.USER,
      interested_tags: data.interested_tags as Tag[],
    };

    this.items.push(user);

    return user;
  }

  async save(data: User) {
    const userIndex = this.items.findIndex((item) => item.id === data.id);

    if (userIndex >= 0) {
      this.items[userIndex] = data;
    }

    return data;
  }

  async deleteUserById(data: User) {
    const userIndex = this.items.findIndex((item) => item.id === data.id);

    if (userIndex >= 0) {
      delete this.items[userIndex];
    }

    return this.items[userIndex];
  }
}
