/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                hero: `url('/src/assets/heroes.jpg')`,
                heroDark: `url('/src/assets/heroes-bg.jpg')`,
            },
            colors: {
                primary: '#FAFAFA',
            },
        },
    },
    plugins: [],
};
