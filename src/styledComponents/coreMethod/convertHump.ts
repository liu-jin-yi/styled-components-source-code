// 将样式中 - 后面的字符转为大写
const convertHump = (key: string) =>
  key.replace(/-([a-z])/g, (...strArr) => strArr[1].toUpperCase());

export { convertHump };
