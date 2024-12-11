module.exports = {
  mode: 'jit', // Active le mode JIT
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Assurez-vous que cela inclut les fichiers .vue
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
