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
          'thin': '100',
          'extralight': '200',
          'light': '300',
          'normal': '400',
          'medium': '500',
          'semibold': '600',
          'bold': '700',
          'extrabold': '800',
          'black': '900',
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
  
