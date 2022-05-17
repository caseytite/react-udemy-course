import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const fakeProducts = [
  {
    id: 1,
    title: "test1",
    price: 23,
    description: "cool",
  },
  {
    id: 2,
    title: "test2",
    price: 12,
    description: "beans",
  },
];

const Products = (props) => {
  const items = fakeProducts.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{items}</ul>
    </section>
  );
};

export default Products;
