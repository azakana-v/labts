import "./App.css";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import CardOrg from "./components/CardOrg";
import Klogoverde from "./assets/klogoverde.png";
import Placeholder from "./assets/placeholder.png";
import {
  Box,
  MenuItem,
  Modal,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import { theme } from "./main";
import { useEffect, useState } from "react";
import PhonePreview from "./components/PhonePreview";

import Orgs from "./orgs.json";

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

const ModalTitle = styled.p`
  font-size: 20px;
  color: green;
  margin: 0 auto;
  font-weight: 600;
  font-family: sans-serif;
  border-bottom: 2px solid green;
  padding-bottom: 10px;
`;
const AddButton = styled.button`
  padding: 15px;
  background-color: green;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 10px;
  transition: 0.2s;
  font-family: sans-serif;
  font-size: 20px;
  &:hover {
    scale: 1.05;
  }
`;
const ModalBox = styled.div`
  width: 20vw;
  height: 20vw;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 50px;
  &:focus {
    outline: none;
    position: absolute;
  }
`;

type Variavel = {
  id: number;
  value: string;
  name: string;
};

function App() {
  const [varCount, setVarCount] = useState(0);
  const [varsArrays, setVarsArrays] = useState<Variavel[]>([]);
  const [previa, setPrevia] = useState<string>("");
  const [org, setOrg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [apelido, setApelido] = useState<string>("");
  const [namespace, setNamespace] = useState<string>("");
  const [elementname, setElementname] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const addVar = (id: number) => {
    varsArrays?.push({ id: id, value: "", name: name.toLowerCase() });
    setVarCount(varCount + 1);
    console.log(varsArrays);
  };

  useEffect(() => {
    console.log(varsArrays);
  }, [varsArrays]);

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVarsArrays = varsArrays?.map((input: any, i: any) => {
        if (i === index) {
          return { ...input, value: e.target.value };
        }
        return input;
      });
      setVarsArrays(newVarsArrays);
    };

  const themePallete: any = useTheme().palette;

  function contarOcorrencias(templateString: string) {
    const matches = templateString.match(/\$\{/g);
    return matches ? matches.length : 0;
  }

  function substituirValores(str: any, vars: any) {
    const valores = vars.reduce((acc: any, item: any) => {
      acc[item.name] = item.value;
      return acc;
    }, {});

    return str.replace(/\$\{([^}]+)\}/g, function (match: any, p1: any) {
      return valores[p1] !== undefined ? valores[p1] : match;
    });
  }

  return (
    <Wrapper>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalBox>
          <ModalTitle>Adicionar váriavel?</ModalTitle>

          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="outlined-basic"
            label="Nome"
            variant="outlined"
          />
          <AddButton
            onClick={() => {
              addVar(varCount + 1);
              setOpen(false);
              setName("");
            }}
          >
            Adicionar
          </AddButton>
        </ModalBox>
      </Modal>
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
                value={namespace}
                onChange={(e) => {
                  setNamespace(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="Id"
                variant="outlined"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="Elementname"
                variant="outlined"
                value={elementname}
                onChange={(e) => {
                  setElementname(e.target.value);
                }}
              />
              <Select
                style={{ color: "black" }}
                defaultValue="0"
                // id="outlined-basic"
                size="small"
                inputProps={{ "aria-label": "Without label" }}
                // variant="outlined"
                onChange={(e) => {
                  setOrg(e.target.value);
                }}
              >
                {Orgs.orgNames.map((item, index) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
              <TextField
                id="outlined-basic"
                size="small"
                label={`Prévia - Número de variaveis: ${contarOcorrencias(
                  previa
                )} / ${varsArrays.length}`}
                value={previa}
                onChange={(e) => {
                  setPrevia(e.target.value);
                }}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="Apelido (Opcional)"
                variant="outlined"
                onChange={(e) => {
                  setApelido(e.target.value);
                }}
                value={apelido}
              />
            </FormContainer>
            <VarLabelContainer>
              <Line />
              <VarLabel>Váriaveis</VarLabel>
              <Line />
            </VarLabelContainer>
            <FormContainer>
              {varsArrays?.map((input, index) => {
                return (
                  <TextField
                    key={input.id}
                    onChange={handleChange(index)}
                    value={input.value}
                    className="input-animation"
                    id="outlined-basic"
                    size="small"
                    label={`${varsArrays[index].name}`}
                    variant="outlined"
                  />
                );
              })}
            </FormContainer>
            <PlusButtonContainer>
              <PlusText
                onClick={() => {
                  setOpen(true);
                }}
              >
                +
              </PlusText>
            </PlusButtonContainer>
          </LeftContainer>

          <RightContainer>
            <PhonePreview
              vars={varsArrays}
              org={org}
              previa={substituirValores(previa, varsArrays)}
            ></PhonePreview>
          </RightContainer>
        </MainContentContainer>
      </Container>
    </Wrapper>
  );
}

export default App;
