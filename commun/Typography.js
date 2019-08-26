import { createGlobalStyle } from "styled-components";
import device from "./device";

const Typography = createGlobalStyle`
*{
  font-family: 'Nunito';
  -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

button{
  border-style: none;
  background-color:transparent;
}
h1,h2,h3,h4{
  font-family: 'Open Sans';
  font-weight: bold;
  line-height: 1.3;
  margin:0;
  padding:0;
  color:#001747;
}
h1{
  font-size: 3.5rem;
  ${device.maxmd`
    font-size:3rem;
  `}
}
h2{
  font-size: 2.5rem;
  ${device.maxmd`
  font-size:2rem;
  `}
}
h3{
  font-size: 2rem;
  ${device.maxmd`
  font-size:1.5rem;
  `}
}
h4{
  font-size: 1.5rem;
}
p{
  font-weight: normal;
  font-size: 1.125rem;
  line-height: 1.5;
  color:#001747;
  margin:0;
  padding:0;
}
label{
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1;
  color:rgba(1,22,71,0.64);
  input{
    margin-top:8px;
  }
  ul{
    font-family: "Nunito";
    font-size: 1.125rem;
    line-height: 1.5;
    color:hsl(209,15%,28%);
}
}
`;
export default Typography;
