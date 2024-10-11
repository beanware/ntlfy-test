'use client';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product, onOpenPopup }) => {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <Image
        alt={product.name}
        src={product.image}
        width={400}
        height={300}
        className="h-56 w-full object-fit"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {product.description}
        </p>
        {/* <p className="text-sm font-medium text-gray-700">${product.price.toFixed(2)}</p> */}
        <button
          onClick={() => onOpenPopup(product)} // Call the function passed from HomePage
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
