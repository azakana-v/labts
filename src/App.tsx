import "./App.css";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import CardOrg from "./components/CardOrg";
import Klogoverde from "./assets/klogoverde.png";
import Placeholder from "./assets/placeholder.png";
import { TextField, useTheme } from "@mui/material";
import { theme } from "./main";
import { useEffect, useState } from "react";

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
  align-items: center;
  min-height: 100%;
  min-width: 100%;
`;
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-width: 80%;
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  min-height: 100%;
`;

const KtechLogo = styled.img``;

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
`;

const PlusText = styled.span`
  color: white;
  font-size: 55px;
  font-weight: 800;
`;

let varsArrays = [{ id: 0, content: "" }];

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
                label="Namespace"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="Id" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Elementname"
                variant="outlined"
              />
              <TextField
                select
                defaultValue="EUR"
                id="outlined-basic"
                label="Org"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Prévia"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
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
                    id="outlined-basic"
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
            <PhoneContainer src={Placeholder}></PhoneContainer>
          </RightContainer>
        </MainContentContainer>
      </Container>
    </Wrapper>
  );
}

export default App;
