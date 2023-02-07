const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  // * Import global variables to all Vue components
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/variables.sass"
        `,
      },
    },
  },
});
