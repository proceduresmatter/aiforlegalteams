/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F5F3EF',
        ink: '#1A1A1A',
        muted: '#5E646B',
        divider: '#D8D6D2',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(28px, 3.5vw, 42px)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'statement': ['clamp(20px, 2.4vw, 28px)', { lineHeight: '1.25' }],
      },
    },
  },
  plugins: [],
}
