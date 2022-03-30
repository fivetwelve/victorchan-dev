module.exports = {
  siteMetadata: {
    title: `Developer portfolio for Victor Chan`,
    author: {
      name: `Victor Chan`,
      summary: `who lives and works in Toronto, building things on the web for people`,
    },
    description: `Developer, husband, cat-dad. Viewer of tv & movies; reader of books & comics. Doing my best to stay positive.`,
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
