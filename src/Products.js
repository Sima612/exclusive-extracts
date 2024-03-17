import Header from "./Header";

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
    <>
      <Header />

      <div className="bg-white">
        <h1 className="text-center font-bold text-4xl mt-10">
          {monthNames[currentMonth]}
        </h1>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group grid content-between">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <video
                    src={product.videoSrc}
                    controls
                    loop
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    src={product.imageSrc}
                    alt="product images"
                  />
                </div>
                <div className="text-start">
                  <h4 className="mt-2 text-xl font-medium text-gray-700">
                    {product.name}
                  </h4>
                  <h4 className="h-10 mt-2 font-medium text-gray-700">
                    {product.desc}
                  </h4>
                  <h4 className="mt-2 font-bold text-gray-700">
                    {product.temp}
                  </h4>
                  <h4 className="mt-2 font-medium text-gray-700">
                    {product.note}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
