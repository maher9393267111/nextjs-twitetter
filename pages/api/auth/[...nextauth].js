import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:'792219443106-3mh3nt46s72cesh54r343jfp83mlivbe.apps.googleusercontent.com',
      // process.env.GOOGLE_CLIENT_ID,
      clientSecret: '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'
      // process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  pages: {
      signIn: "/auth/signin",
  },

  callbacks: {
    async session({session, token}){
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
      session.user.uid = token.sub;
      console.log('current user from api auth-------->',session.user.username);
      return session;
    }
  }
})