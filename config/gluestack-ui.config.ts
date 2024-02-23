import { config as defaultConfig } from '@gluestack-ui/config';
import { createConfig } from '@gluestack-ui/themed';

export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    fonts: {
      ...defaultConfig.tokens.fonts,
      heading: 'SF-Pro',
      body: 'SF-Pro',
    },
  },
});

type Config = typeof config;

declare module '@gluestack-ui/themed' {
  interface UIConfig extends Config {}
}
