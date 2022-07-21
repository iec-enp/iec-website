/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // iec colors
        'iec-blue-1': {
          50: '#f3f4f5',
          100: '#e7e9ea',
          200: '#c4c8cb',
          300: '#a0a6ac',
          400: '#59646e',
          500: '#122130', // color in iec chart
          600: '#101e2b',
          700: '#0e1924',
          800: '#0b141d',
          900: '#091018',
        },
        'iec-blue-2': {
          50: '#f3f4f5',
          100: '#e8e9ec',
          200: '#c4c8cf',
          300: '#a1a6b1',
          400: '#5b6477',
          500: '#14213d', // color in iec chart
          600: '#121e37',
          700: '#0f192e',
          800: '#0c1425',
          900: '#0a101e',
        },
        'iec-blue-3': {
          50: '#f4f6f7',
          100: '#e9edef',
          200: '#c7d1d8',
          300: '#a5b5c0',
          400: '#627e90',
          500: '#1f4761', // color in iec chart
          600: '#1c4057',
          700: '#173549',
          800: '#132b3a',
          900: '#0f2330',
        },
        'iec-blue-4': {
          50: '#fcfdff',
          100: '#f9fbfe',
          200: '#f1f5fd',
          300: '#e9effb',
          400: '#d8e4f9',
          500: '#c7d8f6', // color in iec chart
          600: '#b3c2dd',
          700: '#95a2b9',
          800: '#778294',
          900: '#626a79',
        },
        'iec-orange-1': {
          50: '#fffaf3',
          100: '#fff6e7',
          200: '#fee8c4',
          300: '#fedaa0',
          400: '#fdbf58',
          500: '#fca311', // color in iec chart
          600: '#e3930f',
          700: '#bd7a0d',
          800: '#97620a',
          900: '#7b5008',
        },
        'iec-orange-2': {
          50: '#fffdf5',
          100: '#fffaeb',
          200: '#fff3cd',
          300: '#ffebaf',
          400: '#ffdc74',
          500: '#ffcd38', // color in iec chart
          600: '#e6b932',
          700: '#bf9a2a',
          800: '#997b22',
          900: '#7d641b',
        },
        'iec-gray': {
          50: '#fefefe',
          100: '#fcfcfc',
          200: '#f9f9f9',
          300: '#f5f5f5',
          400: '#ededed',
          500: '#e5e5e5', // color in iec chart
          600: '#cecece',
          700: '#acacac',
          800: '#898989',
          900: '#707070',
        },
      },
    },
  },
  plugins: [],
}
