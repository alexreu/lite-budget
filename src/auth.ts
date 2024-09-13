import prisma from "@/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    redirect: () => {
      return "/dashboard";
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    session: async ({ session, token }) => {
      console.log({ session, token });
      if (session?.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email as string,
              name: user.name,
              image: user.image,
              accounts: {
                create: {
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                },
              },
            },
          });
        }
      }
      return true;
    },
  },
  ...authConfig,
});
