declare module "react-themed" {
  interface MergeProps {
    ownProps: object,
    themeProps: object,
    props: Function,
  }

  type Options = {
    pure?: boolean,
    propName?: string,
    compose?: Function,
    mergeProps?: MergeProps,
  }
  type ThemeCompose = Array<string> | any
  type ThemeConfig = Options | null

  interface Themed {
    compose: ThemeCompose,
    config: ThemeConfig,
  }

  export default function (compose: ThemeCompose, config: ThemeConfig): any
  export function themed(): any
  export function compose(theme1: object, theme2: object): object
}
