module.exports = {
  siteMetadata: {
    title: `charitableFoundation`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rubik\:400,400i,500,600`,
          `Lato\:500,700`,
          `Roboto\:400`,
          `Roboto Condensed\:400,700`
        ],
        display: 'swap'
      }
    }
  ]
}
