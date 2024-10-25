import { HEADER, MOBILE_MENU_LIST } from '@/style/zIndex'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      pp: ['var(--font-pp)'],
      pretendard: ['var(--font-pretendard)'],
      figtree: ['var(--font-figtree)']
    },
    extend: {
      screens: {
        mobile: '480px',
        tablet: '768px',
        desktop: '1280px' // 대소문자 통일
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hackathon-image': 'url("/images/about/hackathon.png")'
      },
      colors: {
        white: '#ffffff',
        grey: '#f4f4f4',
        black: '#000000'
      },
      fontSize: {
        HeaderPC: ['2rem', { fontWeight: 400, lineHeight: 'normal' }],
        HeaderMobile: ['3.2rem', { fontWeight: 200, lineHeight: 'normal' }]
      },
      keyframes: {
        infiniteSlide: {
          '0%': { transform: 'translate(0%)' },
          '100%': { transform: 'translate(-100%)' }
        },
        infiniteSlide2: {
          '0%': { transform: 'translate(100%)' },
          '100%': { transform: 'translate(0%)' }
        },
        scaleLeft: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: '0% 0%'
          },
          '100%': {
            transform: 'scale(1)',
            transformOrigin: '0% 0%'
          }
        },
        scaleDownCenter: {
          '0%': {
            transform: 'scaleX(1)'
          },
          '100%': { transform: 'scaleX(0.3)' }
        },
        fadeinObject: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        infiniteSlide: 'infiniteSlide 5s linear infinite forwards',
        infiniteSlide2: 'infiniteSlide2 5s linear infinite forwards',
        infiniteSlideOriginal:
          'infiniteSlideOriginal 5s linear infinite forwards',
        scaleLeft: 'scaleLeft 0.5s ease-in',
        scaleDownCenter: 'scaleDownCenter 0.5s ease-in forwards',
        fadeinObject: 'fadeinObject 5s linear forwards'
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}

export default config
