export const Table = ({ pokemon }) => {
  return (
    <div className="pokemon-data">
      <table>
        <tbody>
          <tr>
            <td rowSpan="6">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                loading="eager"
                style={{ width: "200px", height: "200px" }}
              />
            </td>
            <th
              colSpan="2"
              style={{ textAlign: "", textTransform: "capitalize" }}
            >
              {pokemon.name}
            </th>
          </tr>
          <tr>
            <td>Type:</td>
            <td>
              {pokemon.types.map((type, index) => (
                <span key={index} className={`type ${type.type.name}`}>
                  {type.type.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>{pokemon.height / 10} m</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{pokemon.weight / 10} kg</td>
          </tr>
          <tr>
            <td>Base Experience:</td>
            <td>{pokemon.base_experience}</td>
          </tr>
          <tr>
            <td>Abilities:</td>
            <td>
              {pokemon.abilities.map((ability, index) => (
                <span key={index}>
                  {ability.ability.name}
                  {index < pokemon.abilities.length - 1 ? ", " : ""}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
