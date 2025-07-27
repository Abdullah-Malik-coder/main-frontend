// import { Link } from "react-router-dom";
// import logo from "../logo/sparepartslogo.jpg"; // Adjust as needed
// import banner from "../assets/bannerhome.jpeg"; 
// export default function Header() {
//   return (
//     <div className="w-full">
//       {/* Header Bar */}
//       <header className="bg-white shadow-md py-3 px-6 flex items-center justify-between border-b-2 border-orange-500">
//         {/* Left: Logo & Callback */}
//         <div className="flex items-center gap-4">
//     <img
//   src={logo}
//   alt="Logo"
//   className="h-20 w-auto"
// />
//           <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded">
//             Request a Call Back
//           </button>
//         </div>

//         {/* Center: Navigation */}
//         <nav className="hidden md:flex gap-8 text-black font-semibold">
//           <Link to="/" className="hover:text-orange-500">Home</Link>
//           <Link to="/about" className="hover:text-orange-500">About Us</Link>
//           <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
//         </nav>

//         {/* Right: Login Buttons */}
//         <div className="flex gap-4">
//           <Link
//             to="/buyer-login"
//             className="text-sm text-black hover:text-orange-500 border border-orange-400 px-3 py-1 rounded"
//           >
//             Buyer Login
//           </Link>
//           <Link
//             to="/login"
//             className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded"
//           >
//             Seller Login
//           </Link>
//         </div>
//       </header>

//       {/* Banner Section with Text and Search */}
//       <div
//         className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         {/* Overlay Text */}
//         <div className="bg-black bg-opacity-50 p-4 rounded mb-4 text-center">
//           <h1 className="text-3xl md:text-4xl font-bold">Find Genuine Spare Parts for Your Vehicle</h1>
//           <p className="mt-2 text-sm md:text-base">Reliable – Verified – Fast Delivery</p>
//         </div>

//         {/* Search Fields */}
//         <div className="flex flex-col md:flex-row items-center gap-4 bg-white bg-opacity-90 p-4 rounded shadow-md">
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="border border-orange-500 px-4 py-2 rounded w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Car Model"
//             className="border border-orange-500 px-4 py-2 rounded w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Spare Part Name"
//             className="border border-orange-500 px-4 py-2 rounded w-[250px]"
//           />
//           <button className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// Header.js

// import { Link } from "react-router-dom";
// import logo from "../logo/sparepartslogo.jpg";

// export default function Header() {
//   return (
//     <header className="bg-white shadow-md py-3 px-6 flex items-center justify-between border-b-2 border-orange-500">
//       {/* Left: Logo & Callback */}
//       <div className="flex items-center gap-4">
//         <img src={logo} alt="Logo" className="h-20 w-auto" />
//         <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded">
//           Request a Call Back
//         </button>
//       </div>

//       {/* Center: Navigation */}
//       <nav className="hidden md:flex gap-8 text-black font-semibold">
//         <Link to="/" className="hover:text-orange-500">Home</Link>
//         <Link to="/about" className="hover:text-orange-500">About Us</Link>
//         <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
//       </nav>

//       {/* Right: Login Buttons */}
//       <div className="flex gap-4">
//         <Link
//           to="/buyer-login"
//           className="text-sm text-black hover:text-orange-500 border border-orange-400 px-3 py-1 rounded"
//         >
//           Buyer Login
//         </Link>
//         <Link
//           to="/login"
//           className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded"
//         >
//           Seller Login
//         </Link>
//       </div>
//     </header>
//   );
// }













import { Link } from "react-router-dom";
import { ShoppingCart, HelpCircle, ClipboardList, User } from "lucide-react";
import logo from "../logo/sparepartslogo.jpg";
import { useState, useRef } from "react";

export default function Header() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const hideTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout.current);
    setShowLoginDropdown(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowLoginDropdown(false);
    }, 300); // Delay to allow user to move the mouse to the dropdown
  };

  return (
    <header className="bg-white shadow-md py-3 px-6 flex flex-wrap items-center justify-between border-b-2 border-orange-500">
      {/* Left: Logo & Callback */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded">
          Request a Call Back
        </button>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden lg:flex gap-6 text-black font-semibold">
        <Link to="/" className="hover:text-orange-500">Home</Link>
        <Link to="/about" className="hover:text-orange-500">About Us</Link>
        <Link to="/contact" className="hover:text-orange-500">Contact Us</Link>
      </nav>

      {/* Right: Icons + Login */}
      <div className="flex items-center gap-4 relative">
        <Link to="/cart" title="Cart">
          <ShoppingCart className="text-gray-700 hover:text-orange-500" />
        </Link>
        <Link to="/orders" title="My Orders">
          <ClipboardList className="text-gray-700 hover:text-orange-500" />
        </Link>
        <Link to="/help" title="Help Center">
          <HelpCircle className="text-gray-700 hover:text-orange-500" />
        </Link>

        {/* Login Dropdown */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded flex items-center gap-1">
            <User size={16} />
            Login
          </button>

          {showLoginDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10 text-sm">
              <Link
                to="/buyer-login"
                className="block px-4 py-2 hover:bg-orange-100 text-black"
              >
                Buyer Login
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-orange-100 text-black"
              >
                Seller Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
