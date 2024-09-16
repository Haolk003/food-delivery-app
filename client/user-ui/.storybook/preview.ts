import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // Đường dẫn tới tệp css chính của dự án

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
