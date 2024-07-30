import React from "react";
import styled from "styled-components";
import LogoImg from "../assets/klogo.png";

const Container = styled.div`
  min-width: 100vh;
  height: 50px;
  background-color: #007e1c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const OrgButtonContainer = styled.div``;

const LogoContainer = styled.div`
  max-width: 45px;
  max-height: 45px;
  border-right: 1px solid white;
  padding-right: 10px;
`;

const Logo = styled.img`
  background-color: green;
  width: 100%;
`;

const OrgButton = styled.button`
  padding: 8px 15px;
  color: #007e1c;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

const Topbar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoImg} />
      </LogoContainer>

      <OrgButtonContainer>
        <OrgButton>Organizações</OrgButton>
      </OrgButtonContainer>
    </Container>
  );
};

export default Topbar;
