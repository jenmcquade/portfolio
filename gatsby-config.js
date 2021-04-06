const path = require('path');
module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, '/src/images/')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.join(__dirname, '/src/pages/')
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jen McQuade, Web Developer',
        short_name: 'JenMcQuade',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#02aab0',
        display: 'standalone',
        icon: 'src/images/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'jmcquade.com',
        protocol: 'https',
        hostname: 'www.jmcquade.com'
      }
    }
  ]
};
