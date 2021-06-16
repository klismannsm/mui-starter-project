## Mui-starter-project

This is a sample project made to test the following technologies:
- Next.JS + Typescript
- Next Auth + Google Signin
- Prisma + PostgreSQL
- Material UI

It features password less authentication using Google OAuth, material UI integration and a dark mode switcher.

### Developing
1) Create a database and an user/password to access that database using your preferred method
2) Create a .env file with the required information (An example is available at .env.sample):
  ```
    - DATABASE_URL="postgresql://user:password@localhost:5432/mui_starter_project_dev?schema=public"
      Used to connect to the database
    - GOOGLE_OAUTH_CLIENT_ID=""
      Google Oauth client ID to use with the authentication
    - GOOGLE_OAUTH_SECRET=""
      Google Oauth secret to use with the authentication
    - AUTH_SECRET=""
      Hash used to generate unique user sessions. Generate one using your preferred method
    - NEXTAUTH_URL=""
      Authentication redirect URL used iwhen generating google oauth keys. For example:
        http://localhost:3000/api/auth
  ```
  - For more details on using google Oauth, check the official Next Auth documentation
3) Run:
  ```
  npx prisma db push
  ```
4) Run:
  ```
  yarn dev
  ```
5) The app will be available at localhost:3000
