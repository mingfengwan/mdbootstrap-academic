const purgecss = require('@fullhuman/postcss-purgecss').default;

const purgecssConfig = purgecss({
    content: ['./dist/*.html', './node_modules/mdb-ui-kit/js/mdb.umd.min.js'],
    css: ['./node_modules/mdb-ui-kit/**/*.css'],
    safelist: {
        standard: ['heart'], // Keep 'heart' class intact
        deep: [
            /^ripple-surface-*/, // Allow all classes starting with ripple-surface-
            /^ripple-wave$/,     // Allow ripple-wave
        ], // Allow deeply nested rules
    },
})

module.exports = ({env}) => ({
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        env === 'production' ? purgecssConfig : false,
    ]
})