import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import "dotenv/config";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.acessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.token = token.acessToken;
      return session;
    },
  },
});
