import React, { useState } from "react";
import styled from "./styledComponents";

const BasisDiv = styled.basisDiv`
  color: pink;
`;
const PropsDiv = styled.propsDiv`
  background-color: pink;
`;

const FuncDiv = styled.funcDiv`
  color: red;
  background-color: ${({ backColor }) => backColor};
`;

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <BasisDiv>基础的样式</BasisDiv>
      <PropsDiv
        onClick={() => {
          console.log("点击事件");
          setCount((oldCount) => oldCount + 1);
        }}
      >
        支持传递props-- {count}
      </PropsDiv>
      <FuncDiv
        backColor="pink"
        onClick={() => {
          console.log("点击事件2");
        }}
      >
        样式支持函数
      </FuncDiv>
    </div>
  );
}

export default App;
