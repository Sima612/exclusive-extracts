import Header from "./Header";

export default function NewProducts({ newProducts }) {
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
          {monthNames[currentMonth + 1]}
        </h1>
        <div id="error-page">
          <p>Sorry, no new products yet.</p>
        </div>
        {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {newProducts.map((product) => (
              <a
                key={product.id}
                href={product.href}
                className="group grid content-between"
              >
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
                  <h4 className="h-12 mt-4 text-xl font-medium text-gray-700">
                    {product.name}
                  </h4>
                  <h4 className="h-8 mt-4 font-medium text-gray-700">
                    {product.desc}
                  </h4>
                  <h4 className="mt-4 font-bold text-gray-700">
                    {product.temp}
                  </h4>
                  <h4 className="mt-4 font-medium text-gray-700">
                    {product.note}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}
