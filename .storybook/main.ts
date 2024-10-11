import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
  //stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"], // removes storybook intro stories/components.
  stories: ["../src/app/components_matthias/**/*.stories.ts"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
};
export default config;
