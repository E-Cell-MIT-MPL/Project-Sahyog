/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class", ".dark"],
	content: [
		"./pages/**/*.{ts,tsx,js,jsx}",
		"./components/**/*.{ts,tsx,js,jsx}",
		"./app/**/*.{ts,tsx,js,jsx}",
		"./src/**/*.{ts,tsx,js,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				playfair: ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				theme: {
					red: '#FF3B30',
					green: '#34C759',
					blue: '#007AFF',
					yellow: '#FFCC00',
					purple: '#8B5CF6',
					indigo: '#6366F1',
					cyan: '#0EA5E9',
					pink: '#EC4899',
					amber: '#F59E0B',
					emerald: '#10B981',
					violet: '#8B5CF6',
					teal: '#14B8A6',
					rose: '#F43F5E'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
					'50%': { opacity: '0.8', filter: 'brightness(1.2)' }
				},
				'rotate-360': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'color-shift': {
					'0%, 100%': { filter: 'hue-rotate(0deg)' },
					'50%': { filter: 'hue-rotate(30deg)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'jelly': {
					'0%, 100%': { transform: 'scale(1)' },
					'25%': { transform: 'scale(0.95, 1.05)' },
					'50%': { transform: 'scale(1.05, 0.95)' },
					'75%': { transform: 'scale(0.97, 1.03)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'pulse-soft': 'pulse-soft 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'glow': 'glow 2s infinite ease-in-out',
				'spin-slow': 'rotate-360 8s linear infinite',
				'shimmer': 'shimmer 3s infinite linear',
				'color-shift': 'color-shift 8s infinite ease-in-out',
				'bounce-subtle': 'bounce-subtle 3s infinite ease-in-out',
				'jelly': 'jelly 1s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} 