/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "prymary-blue": "#020616",
        shadow2: "rgba(30, 80, 255, 0.5)",
        "primary-1": "#0c0115",
        darkslategray: "#3a3a3a",
        text3: "#fff",
        text1: "#f6f6f7",
        gainsboro: "rgba(217, 217, 217, 0.06)",
        "stroke-2": "rgba(20, 20, 20, 0)",
        gray: {
          "100": "rgba(255, 255, 255, 0.06)",
          "200": "rgba(255, 255, 255, 0.7)",
          "300": "rgba(255, 255, 255, 0.1)",
          "400": "rgba(255, 255, 255, 0.08)",
        },
        primary1: "#020610",
        stroke1: "#5a5a5a",
        text4: "#adb9c7",
        "primary-2": "#293041",
        text2: "#b6b6b6",
        antiquewhite: "#ece1cb",
        black: "#000",
        mediumseagreen: "#2ad798",
        darkorange: "#eb7d13",
        mediumspringgreen: "#00ffa8",
        red: "#ff0000",
        "light-version-background": "#f1f4fa",
        "icon-clr2": "rgba(62, 105, 255, 0.9)",
        whitesmoke: "#f7f7f8",
      },
      spacing: {},
      fontFamily: {
        "body-2": "Poppins",
        "abhaya-libre": "'Abhaya Libre'",
      },
      borderRadius: {
        "3xs": "10px",
        "14xl": "33px",
        xl: "20px",
        "121xl": "140px",
        "4xl": "23px",
        "8xs": "5px",
        "2xs": "11px",
        "8xl": "27px",
        "3xl": "22px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      "3xs": "10px",
      xs: "12px",
      "smi-6": "12.6px",
      base: "16px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1825: {
        raw: "screen and (max-width: 1825px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
