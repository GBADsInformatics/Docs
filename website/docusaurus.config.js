// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GBADs Informatics',
  tagline: 'GBADs Informatics',
  url: 'https://gbadsinformatics.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'GBADsInformatics', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  plugins: [
    [
    '@docusaurus-terminology/parser',
    {
      termsDir: './docs/terms/'
    }],
    require.resolve("@cmfcmf/docusaurus-search-local"),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'publications',
        path: 'publications',
        routeBasePath: 'publications',
        sidebarPath: require.resolve('./sidebars.js'),
        includeCurrentVersion: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reports',
        path: 'reports',
        routeBasePath: 'reports',
        sidebarPath: require.resolve('./sidebars.js'),
        includeCurrentVersion: true,
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    // 'es' add after
    locales: ['en', 'fr', 'es'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          includeCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          showReadingTime: true,
          routeBasePath: 'blog',
          path: 'blog',
          // Please change this to your repo.
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: 'Informatics',
        logo: {
          alt: 'GBADs Logo',
          src: 'img/GBADs-LOGO-Black.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Welcome',
            position: 'left',
            label: 'Docs',
            className: "text-nav-item",
          },
          {to: '/publications/Intro', label: 'Presentations and Publications', className: "text-nav-item", position: 'left', activeBaseRegex: `/publications/`},
          {to: '/reports/Intro', label: 'Reports', className: "text-nav-item", position: 'left', activeBaseRegex: `/reports/`},
          {to: '/blog', label: 'Blog', position: 'left', className: "text-nav-item"},
          {to: '/highlights', label:'Highlights', position:'left', className: "text-nav-item"},
          {to:'/about', label: 'About', position:'left', className: "text-nav-item"},
          {to:'/createdoc', label: 'Create Doc', position:'left', className: "text-nav-item"},
          {type: 'localeDropdown',position: 'left', className: "text-nav-item"},
          {
            href: 'https://github.com/GBADsInformatics',
            position: 'right',
            className: "header-github-link",
          },
          {
            href: 'https://www.youtube.com/channel/UCdm3CD5v8YZdHtXbsq5WdWw',
            position: 'right',
            className: "header-youtube-link",
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'GBADs Main Site',
                href: 'https://animalhealthmetrics.org/',
              },
              {
                label: 'Knowledge Engine and Data Portal',
                href: 'http://gbadske.org:8051/dash/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GBADs-OIE',
                href: 'https://gbads-oie.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GBADsInformatics',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GBADs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
