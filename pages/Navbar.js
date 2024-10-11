// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with Next.js Image */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo2.png" // Image path from the public folder
            alt="Melown Logo"
            width={200} // Set the desired width
            height={10} // Set the desired height
            className="mr-2"
          />
        </Link>

        <div>
          {/* The add-product link (commented out) */}
          {/* <Link href="/add-product" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
              Add Product
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
