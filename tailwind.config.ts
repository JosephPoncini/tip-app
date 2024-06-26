import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        //Primary

        StrongCyan: 'hsl(172, 67%, 45%)',

        //Neutral

        VeryDarkCyan: 'hsl(183, 100%, 15%)',
        DarkGrayishCyan: 'hsl(186, 14%, 43%)',
        GrayishCyan: 'hsl(184, 14%, 56%)',
        LightGrayishCyan: 'hsl(185, 41%, 84%)',
        VeryLightGrayishCyan: 'hsl(189, 41%, 97%)',
        White: 'hsl(0, 0%, 100%)',
        GreyText: 'hsl(177, 12%, 66%)',
        ActiveButton:'hsl(173, 61%, 77%)'
      },
      fontFamily: {
        SpaceMonoRegular: 'SpaceMono-Regular',
        SpaceMonoBold: 'SpaceMono-Bold',
      }
    },
  },
  plugins: [],
};
export default config;
