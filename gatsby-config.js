module.exports = {
  siteMetadata: {
    siteTitle: 'my-company-wiki',
    defaultTitle: 'my-company-wiki',
    siteTitleShort: 'my-company-wiki',
    siteDescription: 'A simple company wiki',
    siteUrl: 'https://my-company-wiki.codesanook.com',
    siteAuthor: 'Codesanook team',
    siteImage: '/banner.png',
    siteLanguage: 'en',
    themeColor: '#8257E6',
    basePath: '/',
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: '@rocketseat/gatsby-theme-docs',
      options: {
        configPath: 'src/config',
        docsPath: 'src/docs',
        repositoryUrl: 'https://github.com/rocketseat/gatsby-themes',
        baseDir: 'examples/gatsby-theme-docs',
      },
    },
    'gatsby-plugin-remove-trailing-slashes',
  ],
};
