import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: {
                        DEFAULT: "#7A8B5C",
                        light: "#9CAF88",
                    },
                    copper: {
                        DEFAULT: "#B87333",
                        light: "#C4825A",
                    },
                    wheat: {
                        DEFAULT: "#C4A265",
                        light: "#D4B87A",
                    },
                    charcoal: "#2D2A26",
                    cream: "#FAF8F5",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-heading)"],
            },
        },
    },
    plugins: [],
};
export default config;
