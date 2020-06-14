const withSass = require('@zeit/next-sass');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');

module.exports = withSass({
    webpack: (config) => {
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,
            new Dotenv()
        ]

        return config
    }
});