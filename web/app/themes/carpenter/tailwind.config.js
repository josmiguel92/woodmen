const colors = require('tailwindcss/colors');
const primaryColor = '#bea272';
const accentColor = '#ec7247';

module.exports = {
    content: ["./src/**/*.{html,js}", "./**/*.php",  "./*.php", "./templates/**/*.twig"],
    theme: {
        extend: {
            minHeight: {
                'screen-1/2': '50vh',
            },
            maxHeight: {
                'screen-1/2': '50vh',
            },
            height: {
                'screen-1/2': '50vh',
                'screen-3/4': '75vh',
                'screen-5/4': '120vh',
                'screen-110': '110vh',
            },
            keyframes: {

                heartbeat: {

                    '0%, 100%': {
                        transform: 'scale(1)',
                        'transform-origin': 'center center',
                        'animation-timing-function': 'ease-out'
                    },
                    '10%': {
                        transform: 'scale(0.91)',
                        'animation-timing-function': 'ease-in'
                    },
                    '17%': {
                        transform: 'scale(0.98)',
                        'animation-timing-function': 'ease-out'
                    },
                    '33%': {
                        transform: 'scale(0.87)',
                        'animation-timing-function': 'ease-in'
                    },
                    '45%': {
                        transform: 'scale(1)',
                        'animation-timing-function': 'ease-out'
                    }
                }
            },
            animation: {
                heartbeat: 'heartbeat 2.5s ease-in-out infinite both',
            },
            spacing: {
                128: '32rem',
            },
        },
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
            primary: primaryColor,
            accent: accentColor
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
            'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times', 'Times New Roman', 'Baskerville', 'Palatino', 'Palatino Linotype', 'Garamond', 'Bookman', 'Comic Sans MS', 'cursive'],
            'mono': ['ui-monospace', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"'],
            'display': ['Unna','serif'],
            'body': ['"Open Sans"',],
            'heading': ['Montserrat', 'san-serif'],
        }
    },
    daisyui: {
        styled: true,
        themes: [
            {
                'carpenter': {                          /* your theme name */
                    'primary' : primaryColor,           /* Primary color */
                    'primary-focus' : '#A8864D',     /* Primary color - focused */
                    'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

                    'secondary' : '#353037',         /* Secondary color */
                    'secondary-focus' : '#0B090B',   /* Secondary color - focused */
                    'secondary-content' : '#f9fafb', /* Foreground content color to use on secondary color */

                    'accent' : accentColor,            /* Accent color */
                    'accent-focus' : '#bf5630',      /* Accent color - focused */
                    'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

                    'neutral' : '#927759',           /* Neutral color */
                    'neutral-focus' : '#65533E',     /* Neutral color - focused */
                    'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

                    'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
                    'base-200' : '#f9fafb',          /* Base color, a little darker */
                    'base-300' : '#d1d5db',          /* Base color, even more darker */
                    'base-content' : '#1f2937',      /* Foreground content color to use on base color */

                    'info' : '#2094f3',              /* Info */
                    'success' : '#009485',           /* Success */
                    'warning' : '#ff9900',           /* Warning */
                    'error' : '#ff5724',             /* Error */
                },
        },
        ],
        rtl: false,
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
}
