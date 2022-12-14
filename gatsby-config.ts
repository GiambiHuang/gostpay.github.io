import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  // pathPrefix: '/gostpay.github.io/',
  siteMetadata: {
    title: `Gostpay`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: false,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-dts-css-modules",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    }
  ]
};

export default config;
