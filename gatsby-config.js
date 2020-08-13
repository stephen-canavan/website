module.exports = {
  siteMetadata: {
    title: `GraphQL Stephen Canavan`,
    description: `Stephen Canavan - Software Developer`,
    author: `Stephen Canavan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets/images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@styles": "src/styles",
          "@scenes": "src/scenes",
          "@assets": "src/assets",
          "@data": "src/data",
        },
        extensions: [
          "js",
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
