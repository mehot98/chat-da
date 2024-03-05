import { createRoot } from "react-dom/client";
import App from "@pages/content/ui/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { StyleSheetManager } from "styled-components";

refreshOnUpdate("pages/content");

const root = document.createElement("div");
root.id = "chrome-extension-boilerplate-react-vite-content-view-root";

document.body.append(root);

const rootIntoShadow = document.createElement("div");
rootIntoShadow.id = "shadow-root";

const shadowRoot = root.attachShadow({ mode: "open" });
shadowRoot.appendChild(rootIntoShadow);

const styleElement = document.createElement("style");
shadowRoot.appendChild(styleElement);

createRoot(rootIntoShadow).render(
  <>
    <StyleSheetManager target={styleElement}>
      <App />
    </StyleSheetManager>
  </>,
);
