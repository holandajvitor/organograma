import "./CampoTexto.css";

const CampoTexto = (props) => {
  //a variável "props" vem de propriedade

  const placeholderModificada = `${props.placeholder}...`;
  const labelModificada = `${props.label}`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{labelModificada}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
