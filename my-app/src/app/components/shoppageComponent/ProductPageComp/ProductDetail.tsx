import React from 'react'

const ProductDetail = () => {
    return (
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Product Images */}
          <div className="col-span-4 space-y-4">
            {/* Thumbnail Images */}
            <div className="space-y-2">
              <img src="/image1.jpg" alt="Thumbnail" className="w-full rounded-lg cursor-pointer" />
              <img src="/image2.jpg" alt="Thumbnail" className="w-full rounded-lg cursor-pointer" />
              <img src="/image3.jpg" alt="Thumbnail" className="w-full rounded-lg cursor-pointer" />
              <img src="/image4.jpg" alt="Thumbnail" className="w-full rounded-lg cursor-pointer" />
            </div>
          </div>
  
          {/* Product Information */}
          <div className="col-span-8 space-y-6">
            {/* Product Title */}
            <h1 className="text-3xl font-semibold">Asgaard Sofa</h1>
            {/* Price */}
            <p className="text-xl font-semibold text-gray-800">Rs. 250,000.00</p>
            {/* Ratings */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <span className="text-sm text-gray-600">5 Customer Reviews</span>
            </div>
            {/* Description */}
            <p className="text-gray-700">
              Setting the bar as one of the loudest speakers in its class, the Asgaard sofa is
              compact and well-balanced, boosting clear midrange and extended highs for a
              wonderful sound.
            </p>
            {/* Size Options */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Size</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded-lg hover:bg-gray-200">L</button>
                <button className="px-3 py-1 border rounded-lg hover:bg-gray-200">XL</button>
                <button className="px-3 py-1 border rounded-lg hover:bg-gray-200">XS</button>
              </div>
            </div>
            {/* Color Options */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Color</h3>
              <div className="flex space-x-3">
                <span className="w-6 h-6 rounded-full bg-purple-600 border-2 border-gray-200 cursor-pointer"></span>
                <span className="w-6 h-6 rounded-full bg-black border-2 border-gray-200 cursor-pointer"></span>
                <span className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-gray-200 cursor-pointer"></span>
              </div>
            </div>
            {/* Quantity and Buttons */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-1">
                <button className="text-gray-600">-</button>
                <span className="text-gray-800">1</span>
                <button className="text-gray-600">+</button>
              </div>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Add To Cart
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-200">
                Compare
              </button>
            </div>
            {/* Metadata */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <p>
                <span className="font-semibold">SKU:</span> SS001
              </p>
              <p>
                <span className="font-semibold">Category:</span> Sofas
              </p>
              <p>
                <span className="font-semibold">Tags:</span> Sofa, Chair, Home, Shop
              </p>
              {/* Share Links */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetail;
  