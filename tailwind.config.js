/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins']
            },
            screens: {
                'xs': {
                    'raw': '(max-width:640px)'
                }
            }
        },
    },
    plugins: [],
}