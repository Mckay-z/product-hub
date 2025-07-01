export default function ProductCard({ product }) {
  return (
    <div className="bg-zinc-900 text-white rounded-xl shadow-lg overflow-hidden relative group transition-all">
      {product.tag && (
        <span className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded">
          {product.tag}
        </span>
      )}
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          {product.free && (
            <span className="text-xs px-2 py-1 rounded-full bg-white text-black font-medium">Free</span>
          )}
        </div>
        <p className="text-sm text-gray-400">{product.price}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <img src={product.softwareIcon} alt={product.software} className="w-5 h-5" />
            <span className="text-xs">{product.software}</span>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-white hover:text-purple-500">
              <i className="fa fa-heart"></i>
            </button>
            <button className="text-white hover:text-purple-500">
              <i className="fa fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
