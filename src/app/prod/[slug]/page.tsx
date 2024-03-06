import { notFound } from "next/navigation";
import { products } from "../product";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const item = products.find((product) => product.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <h1>
        <b>Brand: </b> {item.brand}
      </h1>
      <h1>
        <b>Name: </b>
        {item.name}
      </h1>
      <img
        src={item.image}
        alt="dunk-low-retro-sneakers"
        width={150}
        height={150}
      />
    </>
  );
}
