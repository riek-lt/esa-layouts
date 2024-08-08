module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.validation.template': false,
  },
  projects: [
    {
      root: './src/dashboard',
      package: '../../package.json',
    },
    {
      root: './src/graphics',
      package: '../../package.json',
    },
    {
      root: './src/browser_shared',
      package: '../../package.json',
    },

    // esa-layouts-shared
    {
      root: './zoton_shared/dashboard',
      package: '../../package.json',
    },
    {
      root: './zoton_shared/graphics',
      package: '../../package.json',
    },
    {
      root: './zoton_shared/browser_shared',
      package: '../../package.json',
    },

    // streamdeck-plugin
    {
      root: 'streamdeck-plugin',
    },
  ]
}
