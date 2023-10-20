import { verifyJWT } from "./verifyJWT";

export const middlewareRegisterRoute = {
  schema: {
    description: "create user account",
    tags: ["user"],
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        email: { type: "string", format: "email" },
        password: { type: "string", format: "password" },
        role: {
          enum: ["USER", "ADMIN"],
        },
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

export const middlewareSessionRoute = {
  schema: {
    description: "authenticate user",
    tags: ["user"],
    body: {
      type: "object",
      properties: {
        email: { type: "string", format: "email" },
        password: { type: "string", format: "password" },
      },
      examples: [
        {
          email: "user.email@example.com",
          password: "password",
        },
      ],
    },
    response: {
      200: {
        description: "OK",
        type: "object",
        properties: {
          message: {
            type: "object",
          },
        },
      },
      400: {
        description: "BAD_REQUEST",
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

export const middlewareSendNotificationRoute = {
  schema: {
    description: "send notification",
    tags: ["notification"],
    body: {
      type: "object",
      properties: {
        recipientEmail: { type: "string", format: "email" },
        title: { type: "string" },
        content: { type: "string" },
      },
      examples: [
        {
          recipientEmail: "user.email@example.com",
          title: "notification title",
          content: "notification title",
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
      400: {
        description: "BAD_REQUEST",
        type: "object",
        properties: {
          message: {
            type: "object",
          },
        },
      },
      404: {
        description: "NOT_FOUND",
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
  onRequest: [verifyJWT],
};

export const middlewareFosterHomeRoute = {
  onRequest: [verifyJWT],
};
