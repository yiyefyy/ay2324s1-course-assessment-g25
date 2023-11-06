import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID as string,
      clientSecret: process.env.DISCORD_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "text",
    //       placeholder: "your-cool-email"
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //       placeholder: "your-awesome-password"
    //     }
    //   },
    //   async authorize(credentials, req) {
    //     // This function manages authorsation for the CredentialsProvider.
    //     // credentials is defined above, and req contains additional information,
    //     // such as the ip address of the user.
    //     const email = credentials?.email;
    //     const password = credentials?.password;
    //     console.log(`Received credentials: ${email} ${password} from ${req?.headers?.host}`)

    //     // If the user doesn't provide an email or password, return null.
    //     if (!email || !password) return null;

    //     // Otherwise, check the database for a user with the provided email and password.
    //     const user = await prisma.user.findUnique({
    //       where: { email: email }
    //     })

    //     if (!user) return null;

    //     // If the user exists, check the password.
    //     // Currently does not check for password, looking for a workaround.
    //     return user
    //   }
    // })
  ],
  session: {
    strategy: "jwt",
  }
}
