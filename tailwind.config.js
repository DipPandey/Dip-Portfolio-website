module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primaryBg: 'rgba(0, 0, 0, 0.8)',
                secondaryBg: 'rgba(29, 29, 29, 0.8)',
                accent: '#1A73E8',
                primaryText: 'rgba(255, 255, 255, 0.85)',
                border: 'rgba(255, 255, 255, 0.15)',
                hover: 'rgba(255, 255, 255, 0.25)',
            },
        },
    },
    plugins: [],
};
