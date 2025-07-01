import products from "./data/products";
import ProductCard from "./components/ProductCard";
import logo from "./assets/logo.png";
export default function App() {
  return (
    <>
      <header className="w-full min-h-screen bg-black flex flex-col justify-center items-center">
        
        <img
          src={logo}
          alt="Product Hub Logo"
          className="w-100 "
        />
        <h1 className="text-xl text-white text-center mb-10">[Scroll to View Products]</h1>
      </header>
      <div className="bg-black min-h-screen p-10 text-white">       
         <h1 className="text-3xl font-bold text-center mb-10">Explore Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
