/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'twentyonepilots.wiki',
  tagline: 'The tagline of my site',
  url: 'https://twentyonepilots.wiki',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DiscordClique', // Usually your GitHub org/user name.
  projectName: 'twentyonepilots.wiki', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'twentyonepilots.wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/dragon.png',
      },
      items: [
        {
          to: 'docs/dmaorg',
          activeBasePath: 'docs',
          label: 'dmaorg',
          position: 'left',
        },
        {
          to: 'docs/levelofconcern',
          activeBasePath: 'docs',
          label: 'Level of Concern',
          position: 'left',
        },
        {
          to: 'docs/scaledandicy',
          activeBasePath: 'docs',
          label: 'Scaled and Icy',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Dmaorg',
              to: 'docs/dmaorg',
            },
            {
              label: 'Level of Concern',
              to: 'docs/levelofconcern',
            },
            {
              label: 'Scaled and Icy',
              to: 'docs/scaledandicy',
            },
          ],
        },
        {
          title: 'Discord Clique',
          items: [
            {
              label: 'Join Discord Clique',
              href: 'https://discord.gg/twentyonepilots',
            },
            {
              label: 'Discord Clique Website',
              href: 'https://www.discordclique.com',
            },
            {
              label: 'Discord Clique on Twitter',
              href: 'http://twitter.com/discordClique/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contribute to twentyonepilots.wiki',
              href: 'https://github.com/x2110311x/twentyonepilotswiki',
            },
            {
              label: 'Twenty One Pilots Website',
              href: 'https://www.twentyonepilots.com',
            },
            {
              label: 'dmaorg Archive',
              href: '#tba',
            },
          ],
        },
      ],
      copyright: 'DISCLAIMER: We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Twenty One Pilots, or any of its subsidiaries or its affiliates. <br>The official Twenty One Pilots website can be found at https://www.twentyonepilots.com/',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/x2110311x/twentyonepilotswiki/edit/main/src/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
