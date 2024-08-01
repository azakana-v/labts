import React, { useState } from "react";
import PhoneImg from "../assets/phonemockup.png";
import WhatsImg from "../assets/whatsimg.png";
import styled from "styled-components";
import PerfilPlaceHolder from "../assets/klogo.png";
import OthersIMG from "../assets/others.png";

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
  scale: 1.4;
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
  scale: 1.4;
  position: absolute;
  z-index: 1;
`;

const NameBarContainer = styled.div`
  margin-bottom: 10px;
`;
const NameBarEmpty = styled.div`
  width: 100%;
  height: 16px;
  margin-top: 6px;
  background-color: #043e36;
`;
const NameBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #075e54;
  position: relative;
  top: -1px;
  display: flex;
  font-family: sans-serif;
  align-items: center;
  color: white;
`;

const PerfilPhotoContainer = styled.div`
  max-width: 30%;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 0px;
`;

const PerfilPhoto = styled.img`
  border-radius: 50%;
  background-color: #ffffff29;
  max-height: 24px;
  max-width: 24px;
  min-height: 24px;
  min-width: 24px;
`;

const OrgNameContainer = styled.div`
  width: 40%;
`;

const OrgName = styled.p`
  font-size: 10px;
`;
const Subtitle = styled.p`
  font-size: 6px;
  color: #c7c7c7;
  font-weight: 300;
`;
const Others = styled.div`
  width: 30%;
`;

const OthersImg = styled.img`
  width: 100%;
  padding-right: 6px;
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const RightMessageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: right;
  justify-content: right;
  padding-right: 10px;
`;

const LeftMessageContainer = styled.div`
  width: 100%;
  align-items: left;
  margin-bottom: 10px;
  display: flex;
`;

const LeftMessage = styled.p`
  max-width: 60%;
  background-color: white;
  font-size: 9px;
  font-family: sans-serif;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  left: -3px;
`;

const RightMessage = styled.p`
  max-width: 60%;
  background-color: #aed588;
  font-size: 9px;
  font-family: sans-serif;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  right: -3px;
  overflow: hidden;
`;

const PhonePreview = (props: any) => {
  function trataStringOrg(org: string) {
    if (org.length > 15) {
      return org.substring(0, 8) + "...";
    }
    return org;
  }

  return (
    <Container>
      <ContentContainer>
        <NameBarContainer>
          <NameBarEmpty />
          <NameBar>
            <PerfilPhotoContainer>
              <PerfilPhoto src={PerfilPlaceHolder} />
            </PerfilPhotoContainer>
            <OrgNameContainer>
              <OrgName>
                {props.org ? trataStringOrg(props.org) : "Nome da Org"}
              </OrgName>
              <Subtitle>Ultima vez visto 20:00</Subtitle>
            </OrgNameContainer>
            <Others>
              <OthersImg src={OthersIMG} />
            </Others>
          </NameBar>
        </NameBarContainer>
        <MessageContainer>
          <LeftMessageContainer>
            <svg
              width="7"
              height="8"
              viewBox="0 0 7 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 0H7V8L0.5 0Z" fill="#F7F7F7" />
            </svg>

            <LeftMessage>
              {props.previa ? props.previa : "Digite uma prévia!"}
            </LeftMessage>
          </LeftMessageContainer>
          <RightMessageContainer>
            <RightMessage> Obrigado, Mario você é o cara!</RightMessage>
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.5 0H0V6L5.5 0Z" fill="#AED588" />
            </svg>
          </RightMessageContainer>
        </MessageContainer>
      </ContentContainer>
      <PhoneContainer></PhoneContainer>
    </Container>
  );
};

export default PhonePreview;
