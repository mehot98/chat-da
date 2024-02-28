import type { PluginOption } from "vite";

export default function customDynamicImport(): PluginOption {
  return {
    name: "custom-dynamic-import",
    renderDynamicImport({ moduleId }) {
      if (!moduleId.includes("node_modules")) {
        return {
          left: `
          {
            const dynamicImport = (path) => import(path);
            if (typeof browser !== "undefined") {
              dynamicImport(browser.runtime.getURL('./') + 
            `,
          right: ".split('../').join(''))};}",
        };
      }
      return {
        left: "import(",
        right: ")",
      };
    },
  };
}
