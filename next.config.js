/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
};
