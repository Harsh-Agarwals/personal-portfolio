/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			ibm: [
  				'IBM Plex Sans',
  				'sans-serif'
  			]
  		}
  	}
  }
}

