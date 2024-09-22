import { createStyles } from 'antd-style'

type DynamicClassNameParams = {
  styleCss?: string
}

type DynamicClassCssReturn = {
  dynamicClassName: string
}

export default function useDynamicClassName(dynamicClassNameParams: DynamicClassNameParams): DynamicClassCssReturn {
  const { styleCss } = dynamicClassNameParams

  const createdStyles = createStyles(({ css }) => {
    return {
      root: css`
        ${styleCss}
      `,
    }
  })

  const { styles } = createdStyles()

  return { dynamicClassName: styles.root || '' }
}
