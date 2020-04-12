const config = {
  siteTitle: 'Naina Codes', // Site title.
  siteTitleShort: 'NR Codes', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Naina Codes', // Alternative site title for SEO.
  siteLogo: '/logos/logo-512.png', // Logo used for SEO and manifest.
  siteUrl: 'https://nainacodes.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'A personal blog dedicated to JavaScript, React, Angular, Node, and other web technologies.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'Naina Codes RSS feed', // Title of the RSS feed
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  disqusShortname: '', // Disqus shortname.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  userName: 'Naina Razafindrabiby', // Username to display in the author segment.
  userEmail: '', // Email used for RSS feed's author segment
  userTwitter: 'nr_razz', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'earth', // User location to display in the author segment.
  userAvatar: '', // User avatar to display in the author segment.
  userDescription:
    'JavaScript enthusiast, React, Angular, Node. Loves frontend and web related stuff', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/nainarazz',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/nr_razz',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:nainarazz@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2020. Naina Razafindrabiby', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#ad5389', // Used for setting manifest and progress theme colors.
  backgroundColor: '#F2ECEA', // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
