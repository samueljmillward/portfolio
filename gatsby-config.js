module.exports = {
    siteMetadata: {
        title: 'Samuel Millward',
        description: 'Personal portfolio for Samuel Millawrd',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/MDXLayout.js'),
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'images',
            },
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
                production: true,
                disable: !process.env.ANALYZER_BUNDLE_SIZE,
                generateStatsfile: true,
                analyzerMode: 'json',
            },
        },
        {
            resolve: 'gatsby-plugin-styled-components',
            options: {
                //
            },
        },
    ],
};
