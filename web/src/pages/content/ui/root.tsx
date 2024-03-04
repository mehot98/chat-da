import { createRoot } from "react-dom/client";
import App from "@pages/content/ui/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import injectedStyle from "./injected.css?inline";

refreshOnUpdate("pages/content");

const root = document.createElement("div");
root.id = "chrome-extension-boilerplate-react-vite-content-view-root";

document.body.append(root);

const rootIntoShadow = document.createElement("div");
rootIntoShadow.id = "shadow-root";

const shadowRoot = root.attachShadow({ mode: "open" });
shadowRoot.appendChild(rootIntoShadow);

/** Inject styles into shadow dom */
const styleElement = document.createElement("style");
styleElement.innerHTML = injectedStyle + `
  /* 추가적인 스타일을 여기에 추가할 수 있습니다. */
  :host {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999; /* 필요한 경우 z-index도 추가할 수 있습니다. */
  }
`;
shadowRoot.appendChild(styleElement);

createRoot(rootIntoShadow).render(<App />);
