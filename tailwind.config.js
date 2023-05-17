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
        "colors": {
          "FWColorsPrimary": {
            50: "#E3FDF4",
            100: "#C7FAE9",
            200: "#8EF5D3",
            300: "#56F0BD",
            400: "#1EECA7",
            500: "#10B981",
            600: "#0D9668",
            700: "#0A714E",
            800: "#064B34",
            900: "#03261A",
            950: "#02130D"
          }
          "FWColorsSecondary": {
            50: "#FEEEEB",
            100: "#FEDED7",
            200: "#FDBDB0",
            300: "#FB9B88",
            400: "#FA7A61",
            500: "#F95738",
            600: "#EE2E07",
            700: "#B22205",
            800: "#771704",
            900: "#3B0B02",
            950: "#1E0601"
          }
        }
      },
    },
    variants: {},
    plugins: [],
  }
  
