import React from "react";
import PhoneImg from "../assets/phonemockup.png";
import WhatsImg from "../assets/whatsimg.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const PhoneContainer = styled.div`
  width: 210px;
  height: 400px;
  scale: 1.2;
  background-image: url(${PhoneImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;

  z-index: 999;
`;
const ContentContainer = styled.div`
  background-image: url(${WhatsImg});
  background-position: center;
  width: 170px;
  height: 350px;
  scale: 1.2;
  position: absolute;
  z-index: 1;
`;

const NameBarContainer = styled.div``;
const NameBarEmpty = styled.div`
  width: 100%;
  height: 20px;
  background-color: #043e36;
`;
const NameBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #064b43;
  position: relative;
  top: -1px;
  display: flex;
  color: white;
`;

const PerfilPhoto = styled.div`
  width: 30%;
`;
const OrgNameContainer = styled.div`
  width: 30%;
`;

const OrgName = styled.div``;
const Subtitle = styled.div``;
const Others = styled.div`
  width: 40%;
`;

const PhonePreview = () => {
  return (
    <Container>
      <ContentContainer>
        <NameBarContainer>
          <NameBarEmpty />
          <NameBar>
            <PerfilPhoto>photo</PerfilPhoto>
            <OrgNameContainer>
              <OrgName>Brisanet</OrgName>
              <Subtitle>teste</Subtitle>
            </OrgNameContainer>
            <Others>coisas</Others>
          </NameBar>
        </NameBarContainer>
      </ContentContainer>
      <PhoneContainer></PhoneContainer>
    </Container>
  );
};

export default PhonePreview;
