/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", // Include your root HTML file (if applicable)
        "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TS/React files in the src folder
    ],
    theme: {
        extend: {
            // Add custom theme configurations here if needed
        },
    },
    plugins: [
        // Add plugins here, for example:
        require('@tailwindcss/forms'),
        // require("@tailwindcss/typography"),
    ],
    variants: {
        extend: {
            backgroundColor: ["autofill"],
            boxShadow: ["autofill"],
        },
    },
};
