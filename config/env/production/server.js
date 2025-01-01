// path: /config/env/production/server.ts
export default ({ env }) => ({
  proxy: true,
  url: env("portfoliobe.wobetu.com"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});
