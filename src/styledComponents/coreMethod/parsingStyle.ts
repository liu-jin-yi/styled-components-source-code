import { convertHump } from "./convertHump";
const basisParsingStyle = (styleString: string) =>
  styleString
    .trim()
    .replace(/\s/g, "")
    .split(";")
    .filter(Boolean)
    .map((str) => str.split(":"))
    .reduce((acc: { [key: string]: string }, [key, value]) => {
      acc[convertHump(key)] = value;
      return acc;
    }, {});

const advancedParsingStyle = (
  style: TemplateStringsArray,
  funArr: Array<(props: any) => string>,
  props: any
) => {
  let str: string = "";
  style.forEach((item, index) => {
    str += item;
    if (funArr[index]) {
      str += funArr[index](props);
    }
  });

  return str
    .trim()
    .replace(/\s/g, "")
    .split(";")
    .filter(Boolean)
    .map((str) => str.split(":"))
    .reduce((acc: { [key: string]: string }, [key, value]) => {
      acc[convertHump(key)] = value;
      return acc;
    }, {});
};

export { basisParsingStyle, advancedParsingStyle };
