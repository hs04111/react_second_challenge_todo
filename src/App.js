import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
from {
  transform: rotate(0deg)
}
to {
  transform: rotate(360deg);
}
`

const Text = styled.span`
font-size: 40px;
`

const Box = styled.div.attrs({required:true})`
background-color: tomato;
width: 500px;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
animation: ${rotateAnimation} 5s linear infinite;
${Text} {  
  &:hover {
    font-size: 100px;
  }
  &:active {
    opacity: 0;
  }
}
`


function App() {
  return (
    <Box as="p">
      <Text>Click Me</Text>
    </Box>
  )
}

export default App;
