const Footer = () => {
  return (
    <div className="w-full border-2 border-black flex flex-col items-center px-4 pt-16 md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 text-center px-4 py-6">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <img src="/logo.png" alt="Company Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold tracking-wide text-gray-800 uppercase">
              Xbensieve
            </span>
          </a>

          <div className="mt-6 lg:max-w-sm mx-auto">
            <p className="text-sm text-gray-800">
              Welcome to our store, where fashion meets comfort. Explore a wide
              range of trendy clothes designed for every occasion.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              From casual wear to elegant attire, we offer stylish pieces that
              make you look and feel your best. Shop now and upgrade your
              wardrobe.
            </p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-center">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex justify-center">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              0336407016
            </a>
          </div>
          <div className="flex justify-center">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              bennguyen.contact@gmail.com
            </a>
          </div>
          <div className="flex justify-center">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Thu Duc District, Ho Chi Minh City, Vietnam
            </a>
          </div>
        </div>
        <div className="text-center">
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center justify-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">Reach out to us</p>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center justify-between pt-5 pb-10 border-t lg:flex-row lg:items-center lg:space-x-6">
        <p className="text-sm text-gray-600 text-center lg:text-left mt-4 lg:mt-0">
          © Copyright {new Date().getFullYear()} Xbensieve Inc. All rights
          reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 sm:space-y-0 sm:space-x-5 sm:flex-row lg:mb-0">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-500"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-500"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-500"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
