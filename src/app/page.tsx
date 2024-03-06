import Image from "next/image";
import { products } from "./prod/product";
import Link from "next/link";

export default function Home() {
  return<>
    {
        <ul>
            {
                products.map(product => <li key={product.id}><Link href={`/prod/${product.slug}`}>{product.brand} - {product.name}</Link></li>)
            }
        </ul>
    }</>

}
