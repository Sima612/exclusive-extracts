export default function ProductItem({ product }) {
  return (
    <div className="group grid content-between">
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
        <h4 className="h-10 mt-2 font-medium text-gray-700">{product.desc}</h4>
        <h4 className="mt-2 font-bold text-gray-700">{product.temp}</h4>
        <h4 className="mt-2 font-medium text-gray-700">{product.note}</h4>
      </div>
    </div>
  );
}
