import React from "react";
import Image from "next/image";
import { Products } from "../lib/type";
import { Card } from "./Card";
import Link from "next/link";

type CardsProps = {
  products: Products[];
};

export const Cards = ({ products }: CardsProps) => {
  return (
    <div className="flex flex-wrap gap-11 py-14 justify-center content-center items-center border-black">
      {products.map((product) => {
        return (
          // <Link href={`/dashboard/${product.slug}`} key={product.slug}>
            <Card
              rate={product.rate}
              image={product.image}
              brand={product.brand}
              name={product.name}
              description={product.description}
              price={product.price}
              slug=""
            />
          // </Link>
        );
      })}
    </div>
  );
};
