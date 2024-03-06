"use client";

import Image from "next/image";
// import { products } from "../prod/product"
import { Products } from "../lib/type";
import { Button } from "./Button";
import { useState } from "react";
import Link from "next/link";
import { count } from "console";

type CardProps = Products;

// const [like, likeAdd] = useState(0);

// const likeIncrement = () => {
//     likeAdd(like+1);
// }

export const Card = ({
  slug,
  image,
  name,
  description,
  price,
  brand,
  rate,
  onClick,
}: CardProps) => {
  const [Count, setCount] = useState(0);
  const addCount = () => {
    setCount(Count + 1);
  };

  const reductionCount = () => {
    // Count > 0 ? setCount(Count-1) : setCount(0);

    if (Count > 0) {
      setCount(Count - 1);
    } else {
      // ButtonDisabled
    }
  };

  return (
    <>
      <div
        className="border border-black rounded-lg px-4 py-5 w-72 hover:shadow-2xl"
        onClick={onClick}
      >
        <Link href={`/dashboard/${slug}`} key={slug}>
          <p className="border-black border-b-2 pb-2 font-medium">
            <svg
              width="9"
              height="9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block   h-[15px] w-[15px]"
            >
              <path
                d="M4.69 7.501l2.181 1.44c.281.184.627-.09.545-.428l-.632-2.582a.406.406 0 01.126-.395L8.866 3.84c.255-.22.125-.666-.208-.688L6.105 2.98a.35.35 0 01-.193-.073.372.372 0 01-.123-.17L4.837.246a.372.372 0 00-.131-.178.35.35 0 00-.412 0 .372.372 0 00-.131.178L3.21 2.738a.372.372 0 01-.123.17.35.35 0 01-.193.073l-2.553.17c-.333.023-.463.468-.208.689L2.09 5.536a.406.406 0 01.125.396l-.584 2.392c-.1.405.316.734.65.513L4.31 7.501a.345.345 0 01.38 0z"
                fill="#F7B543"
              ></path>
            </svg>
            {rate}
          </p>

          <div className="flex justify-center my-2">
            <Image
              src={image}
              alt={slug}
              width={200}
              height={200}
              className=""
            ></Image>
          </div>

          <p>{brand}</p>
          <p>{name}</p>
          <p>{description}</p>
          <p>₱ {price}</p>
        </Link>

        <div className="flex justify-center item-center my-5 mx-5">
          <Button
            name={"+"}
            onClick={addCount}
            className="hover:bg-slate-800 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </svg>
          </Button>
          <p className="flex px-4 place-items-center h-auto ">{Count}</p>
          <Button
            name={`-`}
            onClick={reductionCount}
            className="hover:bg-slate-800 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14"
              />
            </svg>
          </Button>
        </div>
        <div className="flex justify-center content-center">
          <Button
            name={"Add to Cart"}
            className="px-14 hover:bg-slate-800 hover:text-white"
          >
            Add to Cart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline-block ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
};
