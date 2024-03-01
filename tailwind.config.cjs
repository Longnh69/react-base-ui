/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('./tailwind.preset.cjs')],
}
