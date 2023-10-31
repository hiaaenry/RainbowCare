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

export const middlewareGetUserProfile = {
  schema: {
    description: "get user profile",
    tags: ["user"],
    parameters: [],
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
  onRequest: [verifyJWT],
};

export const middlewareDeleteUser = {
  schema: {
    description: "delete user profile",
    tags: ["user"],
    parameters: [],
    response: {
      204: {
        description: "NO_CONTENT",
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
  onRequest: [verifyJWT],
};

export const middlewareEditUserProfile = {
  schema: {
    description: "edit user profile",
    tags: ["user"],
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        email: { type: "string", format: "email" },
      },
      examples: [
        {
          email: "user.email@example.com",
          name: "user name",
        },
      ],
    },
    response: {
      204: {
        description: "NO_CONTENT",
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
  onRequest: [verifyJWT],
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

export const middlewareCreateFosterHomeRoute = {
  schema: {
    description: "create foster home",
    tags: ["foster home"],
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
      },
      examples: [
        {
          name: "foster home name",
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

export const middlewareEditFosterHomeRoute = {
  schema: {
    description: "edit foster home",
    tags: ["foster home"],
    body: {
      type: "object",
      properties: {
        fosterHomeId: { type: "string" },
        name: { type: "string" },
      },
      examples: [
        {
          fosterHomeId: "03aeb254-04e7-4485-8769-2e94794fd905",
          name: "foster home name",
        },
      ],
    },
    response: {
      204: {
        description: "NO_CONTENT",
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
  onRequest: [verifyJWT],
};

export const middlewareSearchFosterHomeRoute = {
  schema: {
    description: "search foster home",
    tags: ["foster home"],
    parameters: [],
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
