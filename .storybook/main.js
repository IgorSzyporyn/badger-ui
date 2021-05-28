module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    'storybook-facelift',
    '@etchteam/storybook-addon-status',
    'storybook-addon-performance',
    'storybook-addon-designs',
  ],
}
