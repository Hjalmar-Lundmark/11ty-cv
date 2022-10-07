

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    //eleventyConfig.addPassthroughCopy("src/sass");
    


    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};
