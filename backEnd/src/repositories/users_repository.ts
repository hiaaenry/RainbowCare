import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: Prisma.UserCreateInput): Promise<User>;
  save(user: User): Promise<User>;
  deleteUserById(user: User): Promise<User | null>;
}
