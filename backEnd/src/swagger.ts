export const swaggerOptions = {
  swagger: {
    info: {
      title: "My Title",
      description: "My Description.",
      version: "1.0.0",
      contact: {
        email: "salesrayane11@gmail.com",
      },
    },
    host: "localhost:8080",
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

export const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

export const swaggerRegisterRoute = {
  schema: {
    description: "create user account",
    tags: ["user"],
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string", format: "password" },
      },
      examples: [
        {
          name: "user name",
          email: "user.email@example.com",
          password: "password",
        },
      ],
    },
    response: {
      201: {
        description: "CREATED",
        type: "object",
        properties: {
          message: {
            type: "object",
          },
        },
      },
      409: {
        description: "CONFLICT",
        type: "object",
        properties: {
          message: {
            type: "object",
          },
        },
      },
      500: {
        description: "INTERNAL SERVER ERROR",
        type: "object",
        properties: {
          message: {
            type: "object",
          },
        },
      },
    },
  },
};
