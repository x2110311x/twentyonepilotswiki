/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'twentyonepilots.wiki',
  tagline: 'we do the clicking for the clikkies',
  url: 'https://www.twentyonepilots.wiki',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DiscordClique', // Usually your GitHub org/user name.
  projectName: 'twentyonepilots.wiki', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'twentyonepilots.wiki',
      logo: {
        alt: 'scaled and icy inspired dragon',
        src: 'img/dragon-512x512.png',
      },
      items: [
        {
          to: 'docs/blurryface',
          activeBasePath: 'docs',
          label: 'Blurryface',
          position: 'left',
        },
        {
          to: 'docs/trench',
          activeBasePath: 'docs',
          label: 'Trench',
          position: 'left',
        },
                {
          to: 'docs/levelofconcern',  
          activeBasePath: 'docs',
          label: 'Level of Concern',
          position: 'left',
        },
        {
          to: 'docs/scaledandicy/04-02-21-terminating-files',  
          activeBasePath: 'docs',
          label: 'Scaled and Icy',
          position: 'left',
        },
        {
          to: 'docs/clancy',
          activeBasePath: 'docs',
          label: 'Clancy',
          position: 'left',
        },
                {
          to: 'docs/breach/',  
          activeBasePath: 'docs',
          label: 'Breach',
          position: 'left',
        },
        {
          to: 'https://www.discordclique.com',
          label: 'Discord Clique',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Trench',
              to: 'docs/trench',
            },
            {
              label: 'Scaled and Icy',
              to: 'docs/scaledandicy/04-02-21-terminating-files',
            },
            {
              label: 'Clancy',
              to: 'docs/clancy',
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
              label: 'Discord Clique on BlueSky',
              href: 'https://bsky.app/profile/discordclique.bsky.social',
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
              label: 'Our Contributors',
              to: 'docs/contributors',
            },
            {
              label: 'dmaorg Archive',
              href: 'https://www.dmaorg.site',
            },
          ],
        },
      ],
      copyright: 'DISCLAIMER: We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Twenty One Pilots, or any of its subsidiaries or its affiliates. <br>The official Twenty One Pilots website can be found at https://www.twentyonepilots.com/',
    },
    image: 'img/dragon-512x512.png',
    metadata: [
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'description',
        content: 'we do the clicking for the clikkies'
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/x2110311x/twentyonepilotswiki/edit/main/src/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    '/scripts/gtag.js',
    {
      src:
        "https://www.googletagmanager.com/gtag/js?id=G-4T442R4785",
      async: true,
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
};
