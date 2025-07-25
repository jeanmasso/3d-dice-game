// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignorer les avertissements de source map pour MediaPipe
      webpackConfig.module.rules.push({
        test: /\.mjs$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: /@mediapipe/
      });
      
      return webpackConfig;
    }
  }
};
