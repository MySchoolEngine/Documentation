/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GLEngine documentation',
  tagline: 'Documentation of small school mob renderer/engine',
  url: 'https://myschoolengine.github.io/GLEngine-Documentation/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Dominik Rohacek', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GLEngine documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/CodeManual',
          activeBasePath: 'Code manual',
          label: 'Code manual',
          position: 'left',
        },
        {
          to: 'docs/UserManual',
          activeBasePath: 'User manual',
          label: 'User manual',
          position: 'left',
        },
        {
          href: 'https://github.com/MySchoolEngine/GLEngine',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Manuals',
          items: [
            {
              label: 'Installation',
              to: 'docs/Installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/DominikRohacek',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/MySchoolEngine/GLEngine',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dominik Roháček. Built with Docusaurus.`,
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
            'https://github.com/MySchoolEngine/GLEngine/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/MySchoolEngine/GLEngine/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
