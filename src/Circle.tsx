import styled from "styled-components";

interface CircleProps {
    bgColor:string
    borderColor?:string
}

interface ContainerProps {
    bgColor:string
    borderColor:string
}

const Container = styled.div<ContainerProps>`
background-color: ${props=>props.bgColor};
width: 100px;
height: 100px;
border-radius: 50px;
border: 5px solid ${props=>props.borderColor};
`

const Circle = ({bgColor, borderColor}: CircleProps) => {
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/>
}

export default Circle