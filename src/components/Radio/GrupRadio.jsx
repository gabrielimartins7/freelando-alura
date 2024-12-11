import Radio from "./Radio";

const GrupRadio = ({ opcoes, valor, onChange }) => {
  return (
    <div>
      {opcoes.map((option) => (
        <Radio
          key={option.valor}
          valor={option.valor}
          label={option.label}
          checked={option.valor === valor}
          onClick={() => onChange(option.valor)}
        />
      ))}
    </div>
  );
};

export default GrupRadio;