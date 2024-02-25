module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'primary': ['Plus Jakarta Sans', 'sans-serif'],
            'secondary': ['Poppins', 'sans-serif'],
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#392AC6",
                    "secondary": "#87D6F1",
                    "accent": "#7417F6",
                    "neutral": "#1f2937",
                    "base-100": "#f4fdff",
                    "info": "#e0f2fe",
                    "success": "#a3e635",
                    "warning": "#fb923c",
                    "error": "#f87171",                   
                },
            },
        ],
    },
    plugins: [
        require('daisyui'),
    ]
}