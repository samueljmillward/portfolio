module.exports = {
    siteMetadata: {
        title: 'Samuel Millward',
        description: 'Personal portfolio for Samuel Millawrd',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/MDXLayout.js'),
                },
            },
        },
    ],
};
