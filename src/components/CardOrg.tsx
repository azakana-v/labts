import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* align-items:; center; */
/* display: block; */
width: fit-content;
cursor: pointer;
transition: .3s;
&:hover{
    scale: 1.03;
}
`

const ContentContainer = styled.div`
border-radius:  15px;
border: 5px solid #007E1C;
height: 215px;
width: 215px;
`
const Logo = styled.img`

`
const Nome = styled.p`
color: #007E1C;
font-family: sans-serif;
font-size: 30px;
`

const CardOrg = (props: any) => {
  return (
    <Container>
        <ContentContainer>

        <Logo/>
        </ContentContainer>
        <Nome>{props.nome}</Nome>

    </Container>
  )
}

export default CardOrg