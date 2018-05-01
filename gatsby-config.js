module.exports = {
  siteMetadata: {
    title: 'Ironcove Solutions',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-twitter',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
  ],
}
