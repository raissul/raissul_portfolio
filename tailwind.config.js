/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-800
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // gray-800
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // gray-800
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)' // gray-500
        },
        
        // Brand Colors
        primary: {
          DEFAULT: 'var(--color-primary)', // yellow-300
          foreground: 'var(--color-primary-foreground)' // gray-800
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // purple-800
          foreground: 'var(--color-secondary-foreground)' // white
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // indigo-500
          foreground: 'var(--color-accent-foreground)' // white
        },
        
        // Interactive Elements
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // indigo-500
        
        // Status Colors
        success: {
          DEFAULT: 'var(--color-success)', // emerald-500
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-500
          foreground: 'var(--color-warning-foreground)' // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)' // white
        },
        
        // Text Colors
        'text-primary': 'var(--color-text-primary)', // gray-800
        'text-secondary': 'var(--color-text-secondary)', // gray-500
        
        // Surface Colors
        surface: {
          DEFAULT: 'var(--color-surface)', // white
          foreground: 'var(--color-surface-foreground)' // gray-800
        },
        
        // Terminal/Code Colors
        terminal: {
          bg: 'var(--color-terminal-bg)', // gray-900
          text: 'var(--color-terminal-text)' // green-400
        },
        code: {
          bg: 'var(--color-code-bg)' // gray-50
        },
        
        // Glassmorphism
        glass: {
          bg: 'var(--color-glass-bg)', // primary with opacity
          border: 'var(--color-glass-border)' // secondary with opacity
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        'lg': '8px',
        'md': '6px',
        'sm': '4px'
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'strong': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px rgba(69, 55, 127, 0.1)',
        'neon-success': '0 0 20px rgba(16, 185, 129, 0.3)',
        'neon-warning': '0 0 20px rgba(245, 158, 11, 0.3)',
        'neon-error': '0 0 20px rgba(239, 68, 68, 0.3)'
      },
      animation: {
        'typewriter': 'typewriter 2.5s steps(var(--char-count)) forwards',
        'blink': 'blink 1s infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'progress-fill': 'progressFill 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      },
      keyframes: {
        typewriter: {
          'to': { width: 'calc(var(--char-count) * 1ch)' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        progressFill: {
          'from': { transform: 'scaleX(0)' },
          'to': { transform: 'scaleX(1)' }
        }
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}