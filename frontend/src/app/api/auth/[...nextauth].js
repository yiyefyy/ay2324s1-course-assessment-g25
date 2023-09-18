import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
      DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
  ],
};

export default NextAuth(authOptions);
