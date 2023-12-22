const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-12">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
          <h2 className="text-2xl font-bold mb-4">Console Marketplace</h2>
          <p className="text-gray-400">
            Buy and sell consoles with ease on our platform.
          </p>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Consoles
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Sell Console
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
          <h2 className="text-2xl font-bold mb-4">Subscribe</h2>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for updates.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-700 text-white py-2 px-4 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400">
          &copy; 2024 GameCenter Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
