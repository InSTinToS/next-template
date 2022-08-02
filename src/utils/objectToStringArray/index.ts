import type { TObjectToStringArray } from './types'

const objectToStringArray: TObjectToStringArray = ({
  prefix,
  separator,
  objectKeys,
  objectValues
}) => {
  const execute: any = (prev: any, values: any) => {
    const keys = Object.keys(values)

    return keys.map((key: string) => {
      const typeOfValue = typeof values[key]
      const stopCondition = typeOfValue !== 'object'

      return stopCondition
        ? `${prev}${separator}${key}: ${values[key]};`
        : execute(`${prev}${separator}${key}`, values[key])
    })
  }

  return objectValues
    .map((value, index) => execute(`${prefix}${objectKeys[index]}`, value))
    .flat(Infinity)
}

export default objectToStringArray
