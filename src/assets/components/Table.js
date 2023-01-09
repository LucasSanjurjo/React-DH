import TableRow from "./TableRow";

function Table() {
  const peliculas = [
    {
      titulo: "Billie Elliot",
      duracion: 123,
      rating: 5,
      generos: ["drama", "comedia"],
      premios: 2,
    },
    {
      titulo: "Avatar",
      duracion: 12,
      rating: 10,
      generos: ["drama", "accion"],
      premios: 10,
    },
  ];

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duracion</th>
            <th scope="col">Rating</th>
            <th scope="col">Generos</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map((pelicula, index)=>{
            return <TableRow {...pelicula} key = {index} />
          })};
        </tbody>
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duracion</th>
            <th scope="col">Rating</th>
            <th scope="col">Generos</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Table;
