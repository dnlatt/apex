/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	fontSize: {
  		xs: [
  			'12px',
  			'16px'
  		],
  		sm: [
  			'14px',
  			'20px'
  		],
  		base: [
  			'16px',
  			'19.5px'
  		],
  		lg: [
  			'18px',
  			'21.94px'
  		],
  		xl: [
  			'20px',
  			'24.38px'
  		],
  		'2xl': [
  			'24px',
  			'29.26px'
  		],
  		'3xl': [
  			'28px',
  			'50px'
  		],
  		'4xl': [
  			'48px',
  			'58px'
  		],
  		'8xl': [
  			'96px',
  			'106px'
  		]
  	},
  	extend: {
  		fontFamily: {
  			palanquin: [
  				'Palanquin',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat',
  				'sans-serif'
  			]
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			'coral-red': '#FF6452',
  			'slate-gray': '#6D6D6D',
  			'pale-blue': '#F5F6FF',
  			'white-400': 'rgba(255, 255, 255, 0.80)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
  		},
  		screens: {
  			'wide': '1440px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		animation: {
		'spin-slow': 'spin 12s linear infinite',
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}