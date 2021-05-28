import { AddonParameters } from 'storybook-facelift'

declare module '@storybook/addons' {
  export interface Parameters {
    facelift?: AddonParameters
  }
}
