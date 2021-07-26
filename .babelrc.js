module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', corejs: { version: 3, proposals: false } }],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/plugin-transform-runtime', {
      helpers: false,
      regenerator: true,
    }],
  ],
};
