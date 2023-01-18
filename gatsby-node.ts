import { GatsbyNode } from "gatsby";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
// do not use alias paths here as well as inside imported files
// causes project crash while building / entering development mode
// same applies to other files in the root folder

// eslint-disable-next-line
export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
  getConfig,
}) => {
  // disable source maps in production
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }

  // allow webpack to use alias imports configured in tsconfig
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
