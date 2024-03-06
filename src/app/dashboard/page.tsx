import { products } from "../lib/data";
import { Cards } from "../component/Cards";
import { SearchField } from "../component/SearchField";

export default function DashboardPage() {
  return (
    <>
    <div className="h-auto bg-white">
      <div className="logo border-b-2">
        <h1 className="flex flex-wrap w-auto justify-center content-center font-serif bg-white font-bold text-3xl px-9 py-7 text-black hover:text-[#51829B] cursor-pointer tracking-wide">Fake Zalora</h1>

        <div className="searchField">
          <SearchField className="" placeholder="50% Off Nike, New Balance, Adidas"></SearchField>
        </div>
      </div>
      <Cards products={products}/>
    </div>
    
    </>
  );
}
