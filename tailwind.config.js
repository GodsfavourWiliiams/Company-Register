module.exports = {
    purge: [],
    darkMode: 'media',

    theme: {
        fontFamily: {
            'sans': ['Josefin Sans'],

        },
        letterSpacing: {
            widest: "0.5em"
        },

        extend: {
            width: {
                'x': '25rem',
                'xl': '28rem',
                'xs': '30rem',
                's': '30rem',
                'ssl': '32rem',
                'lg': '35rem',
                'base': '38rem',
                'xsmax': '40rem',
            },
            backgroundImage: {
                'search': "url('/todo-app-main/images/search-solid.svg')",
                'desktop': "url('/todo-app-main/images/bg-mobile-light.jpg')"
            },
        },
    },
    variants: {
        extend: {
            active: {

            }
        },
    },
    plugins: [],
}