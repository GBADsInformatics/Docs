// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GBADs Informatics',
  tagline: 'GBADs Informatics',
  url: 'https://gbadsinformatics.github.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  organizationName: 'GBADsInformatics', // GitHub org/user
  projectName: 'docs', // Repo name


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'publications',
        path: 'publications',
        routeBasePath: 'publications',
        sidebarPath: './sidebars.js',
        includeCurrentVersion: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reports',
        path: 'reports',
        routeBasePath: 'reports',
        sidebarPath: './sidebars.js',
        includeCurrentVersion: true,
      },
    ],
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/GBADsLogoRedesign.webp',
      navbar: {
        title: 'GBADs Informatics',
        logo: {
          alt: 'GBADs Informatics Logo',
          src: 'img/GBADsLogoRedesign.webp',
        },
        items: [
          {
            type: 'doc',
            docId: 'Welcome',
            position: 'left',
            label: 'Docs',
            className: 'text-nav-item',
          },
          {
            to: '/publications/intro',
            label: 'Presentations and Publications',
            position: 'left',
            className: 'text-nav-item',
            activeBaseRegex: `/publications/`,
          },
          {
            to: '/reports/intro',
            label: 'Reports',
            position: 'left',
            className: 'text-nav-item',
            activeBaseRegex: `/reports/`,
          },
          {to: '/blog', label: 'Blog', position: 'left', className: 'text-nav-item'},
          {to: '/highlights', label: 'Highlights', position: 'left', className: 'text-nav-item'},
          {to: '/about', label: 'About', position: 'left', className: 'text-nav-item'},
          {type: 'localeDropdown', position: 'left', className: 'text-nav-item'},
          {
            href: 'https://github.com/GBADsInformatics',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.youtube.com/channel/UCdm3CD5v8YZdHtXbsq5WdWw',
            position: 'right',
            className: 'header-youtube-link',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Docs',
                to: '/docs/Welcome',
              },
              {
                label: 'Publications',
                to: '/publications/intro',
              },
              {
                label: 'Reports',
                to: '/reports/intro',
              },
            ],
          },
          {
            title: 'Partners and Funding',
            items: [
              {
                label: 'Our Funders',
                to: 'about/#funders'
              },
            ]
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
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
