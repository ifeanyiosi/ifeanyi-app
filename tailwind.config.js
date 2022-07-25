module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        Beautiste: ["Beautiste", "sans-serif"],
      },
      colors: {
        primary: {
          1: "#EBF9FF", // Light Blue | Blue +3
          2: "#75D2F6", // Medium Blue | Blue +2
          3: "#A0C3EE", // Accent Blue | Blue +1
          4: "#00ADEE", // Primary Blue | Blue 0
          5: "#009CD6", // Primary Button Hover Color | Blue -1
          6: "#016596", // Primary Medium Dark-3 | Blue -2
          7: "#324F73", // Primary Medium Dark-2 | Blue -3
          8: "#082546", // Primary Medium Dark | Blue -4
          9: "#031E3F", // Primary Dark | Blue -5
          10: "#001C3D", // Primary Darkest | Blue -6
        },
        accent: {
          1: "#FFF7EB",
          2: "#FFF0DA",
          3: "#FBAE40",
          4: "#FA710F",
        },
        gray: {
          1: "#F6FAFD",
          2: "#F0F7FB",
          3: "#BDC8D5",
          4: "#A6B4C4",
          5: "#748394",
          6: "#435265",
          7: "#001024",
        },
        validation: {
          1: "#00EE8A",
        },
      },
      backgroundImage: {
        "head-bg": "url('./assets/img/hero-gadgets.png')",
        "market-bg": "url('./assets/img/hero-devices.svg')",
        "hero-image": "url('./assets/img/hero-image.png')",
        "mobile-home-gradient":
          " linear-gradient(to bottom, rgba(255,255,255,0.38) 28%, rgba(255,255,255,0.38) 30%, rgba(255,255,255,1) 56%, rgba(255,255,255,1) 85%), url('./assets/img/hero-image.png')",
      },
      fontSize: {
        "2xl": "2rem",
        xl: "1.5rem",
        lg: "1.125rem",
        base: "1rem",
        sm: "0.875rem",
        xs: "0.625rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
