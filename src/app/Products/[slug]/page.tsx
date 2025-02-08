'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; // Sanity client import
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Product {
  _id: string;
  productName: string;
  price: number;
  inventory: number;
  category: string;
  status: string;
  colors: string[];
  description: string;
  slug: string;
  image: string;
}

// Define ProductDetail component
const ProductDetail = () => {
  const { slug } = useParams();  // Get dynamic slug using useParams()

  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1); // State for quantity

  useEffect(() => {
    if (!slug) return;  // Guard clause to handle if slug is not available yet

    const fetchProduct = async () => {
      const res = await client.fetch(`*[_type=="product" || _type == "male" || _type == "female" || _type == "kids"]{
        productName,
        price,
        _id,
        inventory,
        category,
        status,
        colors,
        description,
        slug,
        "image": image.asset->url,
      }`);
     

      const selectedProduct = res.find((e: Product) => e.slug === slug);
      setProduct(selectedProduct || null);
    };

    fetchProduct();
  }, [slug]);

  // Function to handle Add to Cart with quantity and price
  const handleAddToCart = () => {
    if (product) {
      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      const updatedProduct = { ...product, quantity };  // Add quantity to product
      existingCart.push(updatedProduct);
      localStorage.setItem('cart', JSON.stringify(existingCart));
      setAddedToCart(true);
    }
  };

  // Update quantity and ensure it doesn't exceed inventory
  const increaseQuantity = () => {
    if (quantity < (product?.inventory || 0)) {
      setQuantity(prev => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Calculate the total price based on quantity
  const totalPrice = product ? product.price * quantity : 0;

  if (!product) {
    return <div className="text-center text-xl font-semibold text-red-500">Product not found</div>;
  }

  return (
    <div className="w-full h-auto bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center max-w-screen-xl mx-auto">
        {/* Product Image */}
        <div className="w-full max-w-[480px] h-auto">
          <Image
            src={product.image}
            alt={product.productName}
            width={480}
            height={480}
            className="object-contain rounded-xl shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="w-full max-w-lg text-gray-900">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">{product.productName}</h1>
          <p className="text-lg text-gray-700 mb-6">{product.description}</p>
          <p className="text-3xl font-[500] text-orange-600 mb-6">{`$${totalPrice}`}</p>

          {/* Additional Details */}
          <div className="text-gray-600 space-y-2 mb-6">
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Status:</strong> {product.status}</p>
            <p><strong>Inventory:</strong> {product.inventory}</p>
            <p><strong>Colors Available:</strong>
              {product.colors.map((color, index) => (
                <span key={index} className="mr-2">{color}</span>
              ))}
            </p>
          </div>

          {/* Quantity and Price Section */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
              disabled={quantity >= product.inventory}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="py-3 px-4 lg:w-[200px] h-[50px] bg-black text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-xl active:scale-95"
            >
              <p className="md:text-lg font-semibold text-[15px]">Add To Cart</p>
            </button>

            {/* View Cart Button */}
            {addedToCart && (
              <Link
                href="/cart"
                className="py-3 px-4 lg:w-[200px] h-[50px] bg-blue-600 text-white rounded-lg flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-xl active:scale-95"
              >
                <p className="md:text-lg font-semibold text-[15px]">View Cart</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;