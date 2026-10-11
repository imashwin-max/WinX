/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F5F2EB',
        'bg-secondary': '#EFEBE1',
        surface: '#FAF8F5',
        'accent-blue': '#141413',
        'accent-hover': '#2C2B28',
        'accent-light': '#EAE6DE',
        'accent-purple': '#141413',
        'text-main': '#141413',
        'text-secondary': '#2C2B28',
        'text-muted': '#57534E',
        'text-dim': '#78716C',
        'border-light': '#E5DFD5',
        'border-medium': '#D8D1C5',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 16px rgba(20, 20, 19, 0.05)',
        'card-hover': '0 12px 32px rgba(20, 20, 19, 0.09)',
        'blue-glow': '0 0 25px rgba(20, 20, 19, 0.1)',
        'btn-blue': '0 4px 14px rgba(20, 20, 19, 0.15)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #141413 0%, #3D3A35 100%)',
        'gradient-radial-hero': 'radial-gradient(circle at 60% 0%, rgba(20,20,19,0.04) 0%, transparent 65%)',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'float-glow': 'floatGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'counter-up': 'counterUp 0.8s cubic-bezier(0, 0, 0.2, 1) both',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatGlow: {
          '0%, 100%': { transform: 'translateY(0px)', filter: 'brightness(1)' },
          '50%': { transform: 'translateY(-10px)', filter: 'brightness(1.1)' },
        },
        counterUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
