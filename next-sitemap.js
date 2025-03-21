module.exports = {
  siteUrl: 'https://www.fashiofly.com',
  changefreq: 'daily',
  priority: 1,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    additionalSitemaps: [
      'https://www.fashiofly.com/server-sitemap.xml'
    ],
  },
}
