require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Developer portfolio for Victor Chan`,
    author: {
      name: `Victor Chan`,
      summary: `who lives and works in Toronto, building things on the web for people`,
    },
    description: `Front-end web developer, predominantly React ecosystem but interested in other frameworks and libraries.`,
    siteUrl: `https://victorchan.dev`,
    social: {
      twitter: `fivetwelve`,
    },
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-netlify`,
    'gatsby-plugin-sass',
    'gatsby-plugin-postcss',
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
