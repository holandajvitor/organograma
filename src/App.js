import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#11011b",
    },

    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#18022d",
    },

    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#1a0241",
    },

    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#2b0c59",
    },

    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#492877",
    },

    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#684396",
    },

    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#8760b6",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger;
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        nomesDosTimes={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />;
    </div>
  );
}

export default App;
