const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,js}", "./**/*.php",  "./*.php", "./templates/**/*.twig"],
    theme: {
        extend: {},
        colors: {
            extend: {},
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.stone,
            blue: colors.sky,
            red: colors.red,
            yellow: colors.amber,
            pink: colors.pink,
            green: colors.teal,
            orange: colors.orange,
            primary: '#ec7247'
        },
    },
    plugins: [
    require('@tailwindcss/typography')
    ],
}
