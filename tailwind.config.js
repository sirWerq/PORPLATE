/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            backgroundImage: {
                hero: `url('/src/assets/heroes.jpg')`,
                heroDark: `url('/src/assets/heroesDark.jpg')`,
            },
            colors: {
                primary: '#FAFAFA',
            },
        },
    },
    plugins: [],
};
