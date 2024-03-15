module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
    autoescape: true,
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
  };
};
