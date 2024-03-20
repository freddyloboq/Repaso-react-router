import { useParams } from 'react-router-dom';

const Details = () => {
  // http://localhost:5173/details/2
  // console.log('useParams()', useParams())
  const { id } = useParams();

  console.log('id', typeof id)

  const products = [
    {
      id: "1",
      title: "Playstation",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, dicta, sapiente repellat, officia repellendus pariatur accusamus dolor facere eveniet quisquam architecto magnam fuga totam voluptatem id? Maiores ad dolore vel exercitationem voluptatem unde ratione suscipit? Voluptatem nobis, maxime quos, ipsa tempora eligendi, aperiam esse reprehenderit qui illo accusantium tempore maiores?",
      price: 600000,
    },
    {
      id: "2",
      title: "xbox",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, dicta, sapiente repellat, officia repellendus pariatur accusamus dolor facere eveniet quisquam architecto magnam fuga totam voluptatem id? Maiores ad dolore vel exercitationem voluptatem unde ratione suscipit? Voluptatem nobis, maxime quos, ipsa tempora eligendi, aperiam esse reprehenderit qui illo accusantium tempore maiores?",
      price: 600000,
    },
    {
      id: "3",
      title: "WII",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, dicta, sapiente repellat, officia repellendus pariatur accusamus dolor facere eveniet quisquam architecto magnam fuga totam voluptatem id? Maiores ad dolore vel exercitationem voluptatem unde ratione suscipit? Voluptatem nobis, maxime quos, ipsa tempora eligendi, aperiam esse reprehenderit qui illo accusantium tempore maiores?",
      price: 600000,
    },
  ];
  return (
    <>
      <h1>Details</h1>
      <p>Título: {products[parseInt(id)-1]?.title}</p>
      <p>Descripción: {products[parseInt(id)-1]?.description}</p>
      <p>Precio: {products[parseInt(id)-1]?.price}</p>
    </>
  );
};

export default Details;
