import { v4 as uuidv4 } from 'uuid'

export enum GroupEnum {
  '基础组件' = 1,
  '辅助组件' = 2
}

export enum LinkTypeEnum {
  '未配置',
  '基础页面',
  '其他小程序'
}

export enum CubePictureTypeEnum {
  '一行二个',
  '一行三个',
  '一行四个',
  '二左二右',
  '一左二右',
  '一上两下'
}

export enum PropertyTypeEnum {
  '余额',
  '积分',
  '优惠券'
}

export const commonLink = (): Link => {
  return {
    url: '',
    src: '',
    type: 0,
    urlName: '',
    uuid: uuidv4()
  }
}

const commonStyle: CommonStyleType = {
  radiusT: 10, // 上圆角 0-50
  radiusB: 10, // 下圆角 0-50
  marginT: 10, // 上边距 0-50
  marginB: 10, // 下边距 -100-50
  marginLR: 15 // 左右边距 0-50
}

export const generalStyle = <T extends AllComponentType>(
  componentProperties: Map<string, ComponentType>,
  set: Omit<Component<T>, 'setStyle'>,
  data: T
) => {
  componentProperties.set(set.component, {
    component: set.component,
    cName: set.cName,
    group: set.group,
    sort: set.sort ?? 0,
    setStyle: {
      ...commonStyle,
      ...data
    }
  } as ComponentType)
}
