import {Link} from 'react-router-dom'

const List = () => {
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
      <h1>List</h1>
      <ul>
        {
          products.map((product)=> {
            return (
              <li key={product.id}>
                <Link to={`/details/${product.id}`}>{product.title}</Link>
              </li>
            );
          })
        }
      </ul>
    </>
  );
};

export default List;
