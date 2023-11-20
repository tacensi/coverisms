const eleventySass = require("eleventy-sass");


module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass, {
        sass: {
            sourceMap: true,
            loadPaths: ["node_modules"],
            style: "expanded"
        }
    });

    return { dir: { input: "src/assets", output: "dist" } };
};
