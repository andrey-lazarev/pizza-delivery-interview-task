export const appendClassNameModifier = (
  className: string,
  modifier: string,
): string => (
  modifier ? className + '--' + modifier : ''
)

export const combineClassNames = (
  ...classNames: string[]
): string => (
  classNames.join(' ')
)
