'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const ProductDisplay = ({ product, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg mx-auto overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="object-cover mb-4"
        />
        <p className="text-gray-700 mb-4">{product.description}</p>
        {/* <p className="text-lg font-bold">${product.price.toFixed(2)}</p> */}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
