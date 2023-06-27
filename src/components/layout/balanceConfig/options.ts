import {ListType, ControlShowItemMethod} from '@/components/layout/listToElement'

export const list: ListType<BalanceType>[] = [
  {
    label: '组件设置',
    item: [
      {
        label: '样式',
        type: 'radio',
        prop: 'type',
        radio: [
          {label: '样式一', value: 1},
          {label: '样式二', value: 2}
        ]
      },
      {
        label: '背景颜色',
        type: 'color',
        prop: 'bgColor'
      },
      {
        label: '图标',
        type: 'radio',
        prop: 'isShowIcon',
        radio: [
          {label: '显示', value: true},
          {label: '不显示', value: false}
        ]
      },
      {
        label: '选择图标',
        type: 'cSelectImg',
        prop: 'icon',
        control: {method: ControlShowItemMethod.equality, value: ['isShowIcon', true]}
      },
      {
        label: '标题',
        type: 'input',
        prop: 'title',
        input: {maxlength: 8}
      },
      {
        label: '标题文字颜色',
        type: 'color',
        prop: 'titleColor'
      }
    ]
  },
  {
    label: '样式设置',
    item: [
      {
        label: '文字颜色',
        type: 'color',
        prop: 'textColor'
      },
      {
        label: '箭头图标颜色',
        type: 'color',
        prop: 'rightIconColor'
      },
      {
        label: '按钮文字',
        type: 'input',
        prop: 'buttonText',
        input: {maxlength: 4},
        control: {method: ControlShowItemMethod.equality, value: ['type', 1]}
      },
      {
        label: '按钮文字颜色',
        type: 'color',
        prop: 'btnTextColor',
        control: {method: ControlShowItemMethod.equality, value: ['type', 1]}
      },
      {
        label: '按钮背景颜色',
        type: 'color',
        prop: 'btnBgColor',
        control: {method: ControlShowItemMethod.equality, value: ['type', 1]}
      }
    ]
  }
]
