const productos = [
  {
    id: "1",
    nombre: "Blanco y Negro",
    materia: "algodon",
    stock: "3",
    imagen:
      "https://i.picsum.photos/id/1/200/200.jpg?hmac=jZB9EZ0Vtzq-BZSmo7JKBBKJLW46nntxq79VMkCiBG8",
  },
  {
    id: "2",
    nombre: "Jean",
    materia: "Jean",
    stock: "2",
    imagen:
      "https://i.picsum.photos/id/66/200/200.jpg?hmac=gaKXe-rWmo5fSEm79TTkW_yFJLECw3FdRCh6Dm7jp4g",
  },
  {
    id: "3",
    nombre: "Cuero",
    materia: "Cuero",
    stock: "2",
    imagen:
      "https://i.picsum.photos/id/691/200/200.jpg?hmac=vQryVYx_-QSM9WMaRjBhUI7SB8Ad1FTmG9QkaQRgHFc",
  },
  {
    id: "4",
    nombre: "Tela",
    materia: "Tela",
    stock: "5",
    imagen:
      "https://i.picsum.photos/id/1000/200/200.jpg?hmac=U6gBcO-m8lNXspqhLW17ugDZ1Z3cEcCQj07Wp9Nq7IQ",
  },
];

export default productos;

const task = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });

task()
  .then(
    (result) => {
      console.log(result);
    },
    (err) => console.log(err)
  )
  .finally(() => console.log("Proceso Correto"));

console.log("Ejecutando Promises");
