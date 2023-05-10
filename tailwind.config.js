module.exports = {
    purge: [], // Configure this if you need to remove unused styles in production
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          'Epilogue': ['epilogue', 'sans-serif'],
          'Rubik': ['rubik', 'sans-serif'],
        },
        fontWeight: {
          '100': '100',
          '200': '200',
          '300': '300',
          '400': '400',
          '500': '500',
          '600': '600',
          '700': '700',
          '800': '800',
          '900': '900',
        },
        backgroundColor: {
          tomato: '#F95738',
        },
        textColor: {
          tomato: '#F95738',
        },
        borderColor: {
          tomato: '#F95738',
        },
      },
    },
    variants: {},
    plugins: [],
  }
  
