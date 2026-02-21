import { Link } from "react-router";
import { useCart } from "../../context/CartContext";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const { id, name, overview, rating, price, poster, best_seller } = product;

  function handleAddToCart(product) {
    addToCart(product);
  }

  function handleRemoveFromCart(product) {
    removeFromCart(product);
  }

  return (
    <>
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${id}`} className="relative">
          {best_seller && (
            <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
              Best Seller
            </span>
          )}
          <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
        </Link>
        <div className="p-5">
          <Link to={`/products/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>

          <div className="flex items-center my-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <i
                key={i}
                className={`text-lg ${
                  i < rating ? "bi bi-star-fill" : "bi bi-star"
                } text-yellow-500 mr-1`}
              />
            ))}
          </div>

          <p className="flex justify-between items-center">
            <span className="text-2xl dark:text-gray-200">
              <span>$</span>
              <span>{price}</span>
            </span>
            {cartList.some((item) => item.id === product.id) ? (
              <button
                onClick={() => handleRemoveFromCart(product)}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!product.in_stock}
              >
                Remove Item <i className="ml-1 bi bi-trash3"></i>
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(product)}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!product.in_stock}
              >
                Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
              </button>
            )}
          </p>
        </div>
      </div>
    </>
  );
};
