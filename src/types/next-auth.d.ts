// src/types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      /** The `id` field we attach in callbacks */
      id: string
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    /** `id` is always present on our User model */
    id: string
  }

  interface JWT {
    /** Persist `id` in JWT so we can read it in session callback */
    id: string
  }
}
