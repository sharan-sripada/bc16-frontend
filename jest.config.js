module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*stories.{js,jsx}",
    "!src/utils/**/*.{js,jsx}",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    ".story.js",
    "<rootDir>/assetsTransformer.js",
    "<rootDir>/coverage",
    "<rootDir>/src/assets",
    "<rootDir>/src/index.js",
    "<rootDir>/src/components/templates/jobs-search/JobSearch.js",
    "<rootDir>/src/components/templates/jobs-search/JobSearch.test.js",
    "<rootDir>/src/components/organisms/filter-group/FilterGroup.test.js",
    "<rootDir>/src/components/organisms/filter-group/FilterGroup.js",
    "<rootDir>/src/service/JobService.js",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/coverage",
    "<rootDir>/src/index.js",
    "<rootDir>/src/utils/theme/constant.js",
    "<rootDir>/src/utils/theme/theme.js",
    "<rootDir>/src/components/templates/jobs-search/JobSearch.js",
    "<rootDir>/src/components/templates/jobs-search/JobSearch.test.js",
  ],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "./assetsTransformer.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
  },
  verbose: true,
  moduleDirectories: ["node_modules", "src"],
};
