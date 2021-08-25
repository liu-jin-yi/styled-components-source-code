import React from "react";
import { basisParsingStyle, advancedParsingStyle } from "./coreMethod";

const basisDiv = (style: TemplateStringsArray) => {
  const divElement: React.FC = ({ children }) => {
    const styleObj: React.CSSProperties = basisParsingStyle(style[0]);
    return <div style={styleObj}>{children}</div>;
  };
  return divElement;
};

type propsDivProps = React.DOMAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
} & { [key: string]: any };

const propsDiv = (style: TemplateStringsArray) => {
  const divElement: React.FC<propsDivProps> = ({ children, ...restProps }) => {
    const styleObj: React.CSSProperties = basisParsingStyle(style[0]);
    return (
      <div style={styleObj} {...restProps}>
        {children}
      </div>
    );
  };
  return divElement;
};

const funcDiv = (
  style: TemplateStringsArray,
  ...funArr: Array<(props: any) => string>
) => {
  const divElement: React.FC<propsDivProps> = ({ children, ...restProps }) => {
    const styleObj: React.CSSProperties = advancedParsingStyle(
      style,
      funArr,
      restProps
    );
    const elementProps = Object.entries(restProps).reduce(
      (acc: { [key: string]: any }, [key, value]) => {
        if (key.startsWith("on")) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    return (
      <div style={styleObj} {...elementProps}>
        {children}
      </div>
    );
  };
  return divElement;
};

const _extends = (components: React.FC<any>, style: TemplateStringsArray) => {
  console.log("_extends -> style", style);
  console.log("_extends -> components", components);
};

export default { basisDiv, propsDiv, funcDiv, _extends };
