import ProductItem from "./ProductItem";

export default function Products({ products }) {
  const date = new Date();
  const currentMonth = date.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-white">
      <h1 className="text-center font-bold text-4xl mt-10">
        {monthNames[currentMonth]}
      </h1>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, i) => (
            <ProductItem product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
