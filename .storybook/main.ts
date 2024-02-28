import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const storybookConfig: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    if (config.plugins) {
      config.plugins.push(
        tsconfigPaths({
          projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
        }),
      )
    }

    return mergeConfig(config, {})
  },
}

export default storybookConfig
