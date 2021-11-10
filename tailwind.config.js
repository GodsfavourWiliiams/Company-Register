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
            gridTemplateColumns: {
                // 'add': 'repeat(2,minmax(1fr, 100px))'
            }
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