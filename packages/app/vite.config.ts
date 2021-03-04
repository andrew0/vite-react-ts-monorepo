import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [reactRefresh()],
  optimizeDeps: {
    entries: ["vite-react-ts-components"],
  },
  resolve: {
    alias: {
      "vite-react-ts-components": "/@linked/vite-react-ts-components/index.ts",
      "/@linked/vite-react-ts-components": path.resolve(
        require.resolve("vite-react-ts-components/package.json"),
        "../src"
      ),
    },
  },
};

export default config;
