export type Button = {
  id: string, // 每个流程按钮的id
  title: string,
  className: string,
  order: number, // 默认的按钮展示顺序
  onPress: Function,
  show: boolean, // 是否展示
};
