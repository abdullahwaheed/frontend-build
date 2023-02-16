module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    i18n: {
      plugins: [
        [
          'formatjs',
          {
            idInterpolationPattern: '[sha512:contenthash:base64:6]',
            ast: true,
          },
        ],
      ],
    },
    test: {
      presets: [
        '@babel/preset-env',
      ],
    },
  },
};
