module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    return 'jestSvgTransform';
  }
};
