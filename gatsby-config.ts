import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";
// do not use alias paths here as well as inside imported files
// causes project crash while building / entering development mode
// same applies to other files in the root folder.

dotenv.config();

const removeTrailingSlash = (str: string) => str.replace(/\/+$/, "");

const siteUrl = removeTrailingSlash(process.env.GATSBY_SITE_URL || "");

const sitemapPath = "/sitemap/sitemap-index.xml";

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
  },
  graphqlTypegen: true,
  siteMetadata: {
    title: `Starter website`,
    description: "Starter website",
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Starter website`,
        short_name: `Starter website`,
        start_url: `/`,
        display: `standalone`,
        icon: "src/assets/images/favicon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}${sitemapPath}`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: process.env.GTM_ID,
          cookieName: "gatsby-gdpr-google-tagmanager",
          dataLayerName: "dataLayer",
        },
        environments: ["production"],
      },
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.STORYBLOK_TOKEN,
        version: "published",
        resolveLinks: "story",
        localAssets: true,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};

export default config;
