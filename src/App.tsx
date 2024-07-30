import "./App.css";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import CardOrg from "./components/CardOrg";
import Klogoverde from "./assets/klogoverde.png";
import Placeholder from "./assets/placeholder.png";
import { TextField, useTheme } from "@mui/material";
import { theme } from "./main";
import { useEffect, useState } from "react";
import PhonePreview from "./components/PhonePreview";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: center;
  /* align-items: center; */
  min-height: 100%;
  min-width: 100%;
`;
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-width: 80%;
  @media (max-height: 650px) {
    grid-template-columns: 1fr 1fr 1fr; // Muda para uma coluna em telas pequenas
    gap: 10px; // Reduz o espaçamento entre os itens
  }
`;
const LeftContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  transition: 10s ease-in-out;
  gap: 10px;
`;

const Wrapper = styled.div`
  min-height: 100%;
`;

const KtechLogo = styled.img`
  width: 15%;
`;

const VarLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const Line = styled.div`
  height: 1px;
  background-color: green;
  min-width: 150px;
`;
const VarLabel = styled.span`
  color: green;
  margin: 0px 20px;
  font-family: sans-serif;
`;

const RightContainer = styled.div``;

const PhoneContainer = styled.img`
  width: 70%;
`;

const PlusButton = styled.img`
  min-width: 80px;
`;
const PlusButtonContainer = styled.div`
  background-color: green;
  min-height: 65px;
  min-width: 65px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.1;
  }
  margin-top: 35px;

  @media (max-height: 650px) {
    min-height: 35px;
    min-width: 35px;
    max-height: 35px;
    max-width: 35px;
  }
`;

const PlusText = styled.span`
  color: white;
  font-size: 55px;
  font-weight: 800;
  @media (max-height: 650px) {
    font-size: 35px;
  }
`;

function App() {
  const [varCount, setVarCount] = useState(0);
  const [varsArrays, setVarsArrays] = useState([{ id: 0, content: "" }]);

  useEffect(() => {}, [varsArrays]);

  const addVar = (id: number) => {
    if (varCount < 6) {
      varsArrays.push({ id: id, content: "" });
      setVarCount(varCount + 1);
      console.log(varsArrays);
    }
  };

  const themePallete: any = useTheme().palette;
  return (
    <Wrapper>
      <Topbar />
      <Container className="App">
        <MainContentContainer>
          <LeftContainer>
            <KtechLogo src={Klogoverde} />
            <FormContainer>
              <TextField
                color={themePallete.main}
                id="outlined-basic"
                size="small"
                label="Namespace"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="Id"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="Elementname"
                variant="outlined"
              />
              <TextField
                select
                defaultValue="EUR"
                id="outlined-basic"
                size="small"
                label="Org"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="Prévia"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="Apelido (Opcional)"
                variant="outlined"
              />
            </FormContainer>
            <VarLabelContainer>
              <Line />
              <VarLabel>Váriaveis</VarLabel>
              <Line />
            </VarLabelContainer>
            <FormContainer>
              {varsArrays.map((input, index) => {
                return (
                  <TextField
                    className="input-animation"
                    id="outlined-basic"
                    size="small"
                    label={`Variavel ${varsArrays[index].id + 1}`}
                    variant="outlined"
                  />
                );
              })}
            </FormContainer>
            <PlusButtonContainer>
              <PlusText onClick={() => addVar(varCount + 1)}>+</PlusText>
            </PlusButtonContainer>
          </LeftContainer>

          <RightContainer>
            <PhonePreview></PhonePreview>
          </RightContainer>
        </MainContentContainer>
      </Container>
    </Wrapper>
  );
}

export default App;
