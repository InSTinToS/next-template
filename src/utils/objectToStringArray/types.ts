interface IObjectToStringArrayParams {
  prefix: string
  separator: string
  objectKeys: string[]
  objectValues: any[]
}

type TObjectToStringArray = (params: IObjectToStringArrayParams) => string[]

export type { TObjectToStringArray }
