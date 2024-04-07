import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import type { Preview } from "@storybook/react";
import "../src/styles/App.css";

const MY_VIEWPORTS = {
  FHD: {
    name: "FHD _ 1080P",
    styles: { width: "1900px", height: "1080px" },
  },
  ...INITIAL_VIEWPORTS,
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: MY_VIEWPORTS,
    },
    backgrounds: {
      values: [
        { name: "Light", value: "#ffffff" },
        { name: "Dark", value: "#333333" },
        { name: "Primary", value: "#007bff" },
        { name: "Secondary", value: "#6c757d" },
        { name: "Success", value: "#28a745" },
        { name: "Danger", value: "#dc3545" },
        { name: "Warning", value: "#ffc107" },
        { name: "Info", value: "#17a2b8" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
