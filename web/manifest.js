import fs from "node:fs";
const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
  manifest_version: 3,
  /**
   * if you want to support multiple languages, you can use the following reference
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization
   */
  name: "ChatDA",
  version: packageJson.version,
  description: "삼성의 가전제품에 대해 궁금한 점이 있으신가요? ChatDA가 설명해드리겠습니다!",
  permissions: ["storage", "sidePanel"],
  side_panel: {
    default_path: "src/pages/sidepanel/index.html",
  },
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module",
  },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "ChatDA_icon_32.png",
  },
  icons: {
    16: "ChatDA_icon_16.png",
    32: "ChatDA_icon_32.png",
    48: "ChatDA_icon_48.png",
    128: "ChatDA_icon_128.png",
  },
  content_scripts: [
    {
      // matches: ["http://*/*", "https://*/*", "<all_urls>"],
      matches: ["https://www.samsung.com/*"],
      js: ["src/pages/contentInjected/index.js"],
      // KEY for cache invalidation
      // css: ["assets/css/contentStyle<KEY>.chunk.css"],
    },
    {
      // matches: ["http://*/*", "https://*/*", "<all_urls>"],
      matches: ["https://www.samsung.com/*"],
      js: ["src/pages/contentUI/index.js"],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "ChatDA_icon_128.png",
        "ChatDA_icon_48.png",
        "ChatDA_icon_32.png",
        "ChatDA_icon_16.png",
        "next_icon.png",
        "ranking_icon.png",
        "search_icon.png",
        "assets/png/ChatDA_icon_128.chunk.png",
      ],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
