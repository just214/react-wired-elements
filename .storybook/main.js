module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    // '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'markdown-loader',
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
