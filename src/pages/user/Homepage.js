// import banner from "../../assets/bannerhome.jpeg";
// import CarSidebar from "../../components/CarSidebar1"; // adjust path
// import { useNavigate } from "react-router-dom";

// export default function Home() {
//   const navigate = useNavigate();

//   const handleModelSelect = (make, model) => {
//     navigate(`/products?make=${make}&model=${model}`);
//   };

//   return (
//     <div className="w-full">
//       {/* Banner Section with Text and Search */}
//       <div
//         className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         {/* Overlay Text */}
//         <div className="bg-black bg-opacity-50 p-4 rounded mb-4 text-center w-11/12 md:w-auto">
//           <h1 className="text-2xl md:text-4xl font-bold">Find Genuine Spare Parts for Your Vehicle</h1>
//           <p className="mt-2 text-sm md:text-base">Reliable – Verified – Fast Delivery</p>
//         </div>

//         {/* Search Fields */}
//         <div className="flex flex-col md:flex-row items-center gap-4 bg-white bg-opacity-90 p-4 rounded shadow-md w-11/12 md:w-auto">
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Car Model"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Spare Part Name"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <button className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 w-full md:w-auto">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Car Sidebar Dropdown Section */}
//       <div className="flex flex-col md:flex-row">
//         <CarSidebar onModelSelect={handleModelSelect} />

//         {/* Right section to display optional content */}
//         <div className="flex-1 p-4">
//           <h2 className="text-xl font-bold text-orange-600">Select a make and model to browse parts</h2>
//           {/* You can display search results, featured items, etc., here */}
//         </div>
//       </div>
//     </div>
//   );
// }






// import banner from "../../assets/bannerhome.jpeg";
// import CarSidebar from "../../components/CarSidebar1";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "../../api/axios";

// export default function Home() {
//   const navigate = useNavigate();
//   const [sliders, setSliders] = useState([]);

//   const handleModelSelect = (make, model) => {
//     navigate(`/products?make=${make}&model=${model}`);
//   };

//   useEffect(() => {
//     const fetchSliders = async () => {
//       try {
//         const res = await axios.get("/upload/sliders?type=slider");
//         setSliders(res.data);
//       } catch (err) {
//         console.error("Failed to fetch sliders", err);
//       }
//     };
//     fetchSliders();
//   }, []);

//   return (
//     <div className="w-full">
//       {/* Banner Section with Text and Search */}
//       <div
//         className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         {/* Overlay Text */}
//         <div className="bg-black bg-opacity-50 p-4 rounded mb-4 text-center w-11/12 md:w-auto">
//           <h1 className="text-2xl md:text-4xl font-bold">Find Genuine Spare Parts for Your Vehicle</h1>
//           <p className="mt-2 text-sm md:text-base">Reliable – Verified – Fast Delivery</p>
//         </div>

//         {/* Search Fields */}
//         <div className="flex flex-col md:flex-row items-center gap-4 bg-white bg-opacity-90 p-4 rounded shadow-md w-11/12 md:w-auto">
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Car Model"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Spare Part Name"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <button className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 w-full md:w-auto">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Car Sidebar Dropdown Section */}
//       <div className="flex flex-col md:flex-row">
//         <CarSidebar onModelSelect={handleModelSelect} />

//         {/* Right section with slider and message */}
//         <div className="flex-1 p-4">
//           <div className="flex justify-center mb-4">
//             <div className="bg-black text-orange-500 px-6 py-3 rounded shadow-md font-semibold text-center text-lg animate-pulse">
//               ➤ Select a make and model to browse parts
//             </div>
//           </div>

//           <div className="relative w-full h-[400px] overflow-hidden rounded shadow-md">
//             {sliders.map((slider, index) => (
//               <div
//                 key={slider._id}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}
//               >
//                 <img
//                   src={`http://localhost:5000${slider.imageUrl}`}
//                   alt={slider.subtitle}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-6">
//                   <h3 className="text-xl text-white font-bold mb-2">{slider.subtitle}</h3>
//                   <button className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// import banner from "../../assets/bannerhome.jpeg";
// import CarSidebar from "../../components/CarSidebar1";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "../../api/axios";

// export default function Home() {
//   const navigate = useNavigate();
//   const [sliders, setSliders] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleModelSelect = (make, model) => {
//     navigate(`/products?make=${make}&model=${model}`);
//   };

//   useEffect(() => {
//     const fetchSliders = async () => {
//       try {
//         const res = await axios.get("/upload/sliders?type=slider");
//         setSliders(res.data);
//       } catch (err) {
//         console.error("Failed to fetch sliders", err);
//       }
//     };
//     fetchSliders();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliders.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [sliders.length]);

//   return (
//     <div className="w-full">
//       {/* Banner Section with Text and Search */}
//       <div
//         className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white"
//         style={{ backgroundImage: `url(${banner})` }}
//       >
//         <div className="bg-black bg-opacity-50 p-4 rounded mb-4 text-center w-11/12 md:w-auto">
//           <h1 className="text-2xl md:text-4xl font-bold">Find Genuine Spare Parts for Your Vehicle</h1>
//           <p className="mt-2 text-sm md:text-base">Reliable – Verified – Fast Delivery</p>
//         </div>

//         <div className="flex flex-col md:flex-row items-center gap-4 bg-white bg-opacity-90 p-4 rounded shadow-md w-11/12 md:w-auto">
//           <input
//             type="text"
//             placeholder="Car Make"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Car Model"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <input
//             type="text"
//             placeholder="Spare Part Name"
//             className="border border-orange-500 px-4 py-2 rounded w-full md:w-[250px]"
//           />
//           <button className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 w-full md:w-auto">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Car Sidebar Dropdown Section */}
//       <div className="flex flex-col md:flex-row">
//         <CarSidebar onModelSelect={handleModelSelect} />

//         <div className="flex-1 p-4">
//           <div className="flex justify-center mb-3">
//             <div className="bg-white-800 text-orange-500 px-6 py-3 rounded shadow-md font-semibold text-center text-lg animate-pulse">
//               <span className="mr-3 animate-bounce text-3xl">☚</span>
//               Select a make and model to browse parts
//             </div>
//           </div>

//           <div className="relative w-full h-[580px] overflow-hidden rounded shadow-md mb-10">
//             {sliders.map((slider, index) => (
//               <div
//                 key={slider._id}
//                 className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                   index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//                 }`}
//               >
//                 <img
//                   src={`http://localhost:5000${slider.imageUrl}`}
//                   alt={slider.subtitle}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-6">
//                   <h3 className="text-lg text-white mb-2">{slider.subtitle}</h3>
//                   <button className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Insert full-width promotional banner */}
//          <div
//   className="relative w-full bg-cover bg-center h-[600px]  min-h-screen flex justify-center items-center"
//   style={{ backgroundImage: `url(${banner})` }}
// >
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 p-6 text-center">
//               <h2 className="text-4xl font-bold mb-4">Car Parts That Exceed Your Expectations</h2>
//               <p className="mb-4 max-w-2xl">
//                 Morbi accumsan sodales sociosqu curae egestas metus. Tellus nascetur egestas nunc consectetur ullamcorper sodales dignissim montes ultricies rhoncus etiam. In maximus efficitur dignissim primis semper himenaeos pharetra.
//               </p>
//               <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-orange-600">
//                 Go To Shop !
//               </button>
//             </div>
//             <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-lg grid grid-cols-1 md:grid-cols-4 gap-6 px-6 py-6 rounded">
//               <div className="text-center">
//                 <h3 className="text-3xl font-extrabold">2,500<span className="text-orange-500"> +</span></h3>
//                 <p className="text-gray-600">Brand Product</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-3xl font-extrabold">96<span className="text-orange-500"> %</span></h3>
//                 <p className="text-gray-600">Customer Satisfaction</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-3xl font-extrabold">120<span className="text-orange-500"> +</span></h3>
//                 <p className="text-gray-600">Offline Store</p>
//               </div>
//               <div className="text-center">
//                 <h3 className="text-3xl font-extrabold">75<span className="text-orange-500"> +</span></h3>
//                 <p className="text-gray-600">Professional Team</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import banner from "../../assets/bannerhome.jpeg";
// import review from '../../assets/reviews.png'
// import CarSidebar from "../../components/CarSidebar1";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "../../api/axios";

// export default function Home() {
//   const navigate = useNavigate();
//   const [sliders, setSliders] = useState([]);
//   const [make, setMake] = useState('');
// const [model, setModel] = useState('');
// const [partName, setPartName] = useState('');
// const [condition, setCondition] = useState("");



//   const handleModelSelect = (make, model) => {
// navigate(`/shop?make=${make}&model=${model}`);

//   };

//   useEffect(() => {
//     const fetchSliders = async () => {
//       try {
//         const res = await axios.get("/upload/sliders?type=slider");
//         setSliders(res.data);
//       } catch (err) {
//         console.error("Failed to fetch sliders", err);
//       }
//     };
//     fetchSliders();
//   }, []);



//   return (
//     <div className="w-full">
//       {/* Banner Section with Text and Search */}
//      <div
//   className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col justify-center items-center text-white mt-4"
//   style={{ backgroundImage: `url(${banner})` }}
// >
//   {/* Heading */}
//   <div className="bg-black bg-opacity-50 p-4 rounded mb-4 text-center w-11/12 md:w-auto">
//     <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
//       Find Genuine Spare Parts for Your Vehicle
//     </h1>
//     <p className="mt-2 text-xs sm:text-sm md:text-base">
//       Reliable – Verified – Fast Delivery
//     </p>
//   </div>

//   {/* Search Form */}
//   <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center gap-3 bg-white bg-opacity-90 p-4 rounded shadow-md w-11/12 max-w-5xl">
//     <input
//       type="text"
//       placeholder="Car Make"
//       value={make}
//       onChange={(e) =>
//         setMake(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
//       }
//       className="border border-orange-500 px-4 py-2 rounded w-full sm:w-[200px] md:w-[250px] text-black"
//     />

//     <input
//       type="text"
//       placeholder="Car Model"
//       value={model}
//       onChange={(e) =>
//         setModel(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
//       }
//       className="border border-orange-500 px-4 py-2 rounded w-full sm:w-[200px] md:w-[250px] text-black"
//     />

//     <input
//       type="text"
//       placeholder="Spare Part Name"
//       value={partName}
//       onChange={(e) =>
//         setPartName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
//       }
//       className="border border-orange-500 px-4 py-2 rounded w-full sm:w-[200px] md:w-[250px] text-black"
//     />
// <select
//   value={condition}
//   onChange={(e) => setCondition(e.target.value)}
//   className="border border-orange-500 px-4 py-2 rounded w-full sm:w-[200px] md:w-[250px] text-black"
// >
//   <option value="">Select Condition</option>
//   <option value="New">new</option>
//   <option value="Used">used</option>
// </select>
//     <button
//       onClick={() => {
//         const query = new URLSearchParams({
//           make,
//           model,
//           name: partName,
//           condition
//         }).toString();
//         navigate(`/shop?${query}`);
//       }}
//       className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 w-full sm:w-auto"
//     >
//       Search
//     </button>
//   </div>
// </div>

import banner from "../../assets/bannerhome.jpg";
import review from '../../assets/reviews.png'
import CarSidebar from "../../components/CarSidebar1";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "../../api/axios";
import ToyotaLogo from '../../assets/toyota.png';
import FordLogo from '../../assets/ford.png';
import HyundaiLogo from '../../assets/hyundai.png';
import AudiLogo from "../../assets/audi.png";
import MazdaLogo from '../../assets/mazda.png';
import HondaLogo from '../../assets/honda.png';
import BMWLogo from '../../assets/bmw.png';
import SubaruLogo from '../../assets/subaru.png';
import JeepLogo from '../../assets/jeep.png';
import JaguarLogo from "../../assets/jaguar.png";
import Select from 'react-select';

export default function Home() {
  const navigate = useNavigate();
  const [sliders, setSliders] = useState([]);
  const [make, setMake] = useState('');
const [model, setModel] = useState('');
const [partName, setPartName] = useState('');
const [condition, setCondition] = useState("");
  const [categoryBanners, setCategoryBanners] = useState([]);
const [selectedYear, setSelectedYear] = useState('');




// Put this above the return:
const yearOptions = Array.from({ length: 25 }, (_, i) => {
  const year = 2000 + i;
  return { value: year, label: year };
});


   // Arrays for suggestions
  const makesList = ["Toyota", "Tesla", "Tata", "Honda", "Hyundai", "Ford", "Fiat", "BMW", "Audi"];
  const modelsList = ["Corolla", "Camry", "Model S", "Model 3", "Nexon", "Civic", "Accord", "i20"];
  const partsList = ["Tyre", "Transmission", "Turbocharger", "Tail Light", "Timing Belt", "Clutch", "Brake Pads"];

  // Refs for click outside
  const makeRef = useRef(null);
  const modelRef = useRef(null);
  const partRef = useRef(null);



  
  const filterSuggestions = (input, list) => {
    if (!input) return [];
    return list.filter(item => item.toLowerCase().includes(input.toLowerCase()));
  };

  const makeSuggestions = filterSuggestions(make, makesList);
  const modelSuggestions = filterSuggestions(model, modelsList);
  const partSuggestions = filterSuggestions(partName, partsList);

  const handleModelSelect = (make, model) => {
navigate(`/shop?make=${make}&model=${model}`);

  };

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await axios.get("/upload/sliders?type=slider");
        setSliders(res.data);
      } catch (err) {
        console.error("Failed to fetch sliders", err);
      }
    };



    
    const fetchCategoryBanners = async () => {
      try {
        const res = await axios.get("/upload/sliders?type=category");
        setCategoryBanners(res.data);
      } catch (err) {
        console.error("Failed to fetch category banners", err);
      }
    };
    fetchSliders();
        fetchCategoryBanners();

  }, []);


  
  // Hide suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (makeRef.current && !makeRef.current.contains(e.target)) setMake(prev => prev.trim());
      if (modelRef.current && !modelRef.current.contains(e.target)) setModel(prev => prev.trim());
      if (partRef.current && !partRef.current.contains(e.target)) setPartName(prev => prev.trim());
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const topBanner = categoryBanners.length > 0 ? categoryBanners[0] : null;

return (
<div className="w-full overflow-x-hidden">

    {/* Top Banner Section with Text and Search */}
  <div
  className="relative w-full h-[calc(100vh-64px)] flex flex-col justify-center items-center text-white overflow-hidden"
  style={{ marginTop: -16 }}
>
  {topBanner ? (
    topBanner.imageUrl.endsWith(".mp4") || topBanner.imageUrl.endsWith(".webm") ? (
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={topBanner.imageUrl}
        autoPlay
        muted
        loop
      />
    ) : (
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${topBanner.imageUrl})` }}
      />
    )
  ) : (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-300 z-0" />
  )}

  {/* Overlay Title */}
  <div className="relative z-10 bg-black bg-opacity-50 p-4 rounded mb-4 text-center w-11/12 max-w-6xl">
    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
      Find Genuine Spare Parts for Your Vehicle
    </h1>
    <p className="mt-2 text-xs sm:text-sm md:text-base">
      Reliable – Verified – Fast Delivery
    </p>
  </div>

  {/* Search Form */}
  <div className="relative z-10 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center gap-3 bg-white bg-opacity-80 p-4 rounded shadow-md w-11/12 max-w-6xl">
   {/* Car Make Input */}
<input
  type="text"
  placeholder="Car Make"
  value={make}
  onChange={(e) => {
    const value = e.target.value;
    setMake(value.charAt(0).toUpperCase() + value.slice(1));
  }}
  list="makeSuggestions"
  className="border border-orange-500 px-4 py-2 rounded w-full sm:w-48 md:w-56 text-black"
/>
<datalist id="makeSuggestions">
  {makeSuggestions?.map((suggestion, idx) => (
    <option key={idx} value={suggestion} />
  ))}
</datalist>

{/* Car Model Input */}
<input
  type="text"
  placeholder="Car Model"
  value={model}
  onChange={(e) => {
    const value = e.target.value;
    setModel(value.charAt(0).toUpperCase() + value.slice(1));
  }}
  list="modelSuggestions"
  className="border border-orange-500 px-4 py-2 rounded w-full sm:w-48 md:w-56 text-black"
/>
<datalist id="modelSuggestions">
  {modelSuggestions?.map((suggestion, idx) => (
    <option key={idx} value={suggestion} />
  ))}
</datalist>

{/* Spare Part Name */}
<input
  type="text"
  placeholder="Spare Part Name"
  value={partName}
  onChange={(e) => {
    const value = e.target.value;
    setPartName(value.charAt(0).toUpperCase() + value.slice(1));
  }}
  list="partSuggestions"
  className="border border-orange-500 px-4 py-2 rounded w-full sm:w-48 md:w-56 text-black"
/>
<datalist id="partSuggestions">
  {partSuggestions?.map((suggestion, idx) => (
    <option key={idx} value={suggestion} />
  ))}
</datalist>


<Select
  value={selectedYear ? { value: selectedYear, label: selectedYear } : null}
  onChange={(option) => setSelectedYear(option?.value || "")}
  options={yearOptions}
  placeholder="Select Year"
  className="w-full sm:w-48 md:w-56"
  styles={{
    menuPortal: (base) => ({ ...base, zIndex: 9999 }), // fixes overlap
  }}
  menuPortalTarget={document.body}
/>


    {/* Condition Selector */}
    <select
      value={condition}
      onChange={(e) => setCondition(e.target.value)}
      className="border border-orange-500 px-4 py-2 rounded w-full sm:w-48 md:w-56 text-black"
    >
      <option value="">Select Condition</option>
      <option value="New">New</option>
      <option value="Used">Used</option>
    </select>

    {/* Search Button */}
    <button
      onClick={() => {
        const query = new URLSearchParams({
          make,
          model,
          name: partName,
          condition,
          year: selectedYear,
        }).toString();
        navigate(`/shop?${query}`);
      }}
      className="bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 w-full sm:w-auto"
    >
      Search
    </button>
  </div>
</div>


     {/* Car Sidebar Dropdown Section */}
<div className="flex flex-col md:flex-row mt-6 gap-4">
  <div className="w-full md:w-60 lg:w-64 xl:w-72">
    <CarSidebar onModelSelect={handleModelSelect} />
  </div>


        <div className="flex-2 p-4">
          <div className="flex justify-center mb-3">
            <div className="bg-white-800 text-orange-600 px-6 py-3 rounded shadow-md font-semibold text-center text-lg animate-pulse">
              <span className="mr-3 animate-bounce text-3xl"></span>
              FEATURED PRODUCTS
            </div>
          </div>
<div className="w-full mb-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {sliders.map((slider) => (
      <div
        key={slider._id}
        className="relative bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer"
      >
        {/* Image */}
        <img
          src={slider.imageUrl}
          alt={slider.title}
          className="w-full h-64 object-cover"
        />

        {/* Overlay text */}
       <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-1">
  <h3 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300 drop-shadow-lg mb-2 text-center animate-pulse">
    {slider.subtitle}
  </h3>
  <div className="flex justify-center">
<Link to="/shop">
  <button className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600">
    Shop Now
  </button>
</Link>
</div>

        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>

{/* Premium Brands Scrolling Section */}
<div className="bg-white py-12 px-4 mt-20 overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">
    
    <h2 className="text-3xl font-bold mb-8">
      Most valuable brands <br className="hidden sm:block" /> are available
    </h2>

    {/* Scrolling Container */}
    <div className="relative w-full overflow-x-hidden">
      <div
  className="flex animate-scroll gap-8"
  style={{
    animation: "scroll 20s linear infinite",
    width: "200%", 
  }}
>

        {/* First set of logos */}
        <div className="flex gap-12">
          <img src={ToyotaLogo} alt="Toyota" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />
          <img src={FordLogo} alt="Ford" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />
          <img src={HyundaiLogo} alt="Hyundai" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />
          <img src={AudiLogo} alt="Audi" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />
          <img src={MazdaLogo} alt="Mazda" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />
          <img src={HondaLogo} alt="Honda" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />
          <img src={BMWLogo} alt="BMW" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />
         <img src={SubaruLogo} alt="subaru" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />
          <img src={JeepLogo} alt="jeep" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />
          <img src={JaguarLogo} alt="jaguar" className="h-20 sm:h-24 md:h-28 object-contain flex-shrink-0" />

        </div>

        {/* Duplicate set for seamless loop */}
       
      </div>
    </div>
  </div>
</div>

      {/* Promotional Banner Section Full Width */}
      <div
        className="relative w-full bg-cover bg-center h-[600px] flex justify-center items-center mt-[100px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 p-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Car Parts That Exceed Your Expectations</h2>
          <p className="mb-4 max-w-2xl">
Strong relationships and mutual care build lasting success. New opportunities grow when we work together, creating a foundation of trust, respect, and shared achievement          </p>
<Link to="/shop">
  <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded shadow hover:bg-orange-600">
    Go To Shop !
  </button>
</Link>        </div>

<div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-6 rounded">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold">2,500<span className="text-orange-500"> +</span></h3>
            <p className="text-gray-600">Brand Product</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-extrabold">96<span className="text-orange-500"> %</span></h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-extrabold">120<span className="text-orange-500"> +</span></h3>
            <p className="text-gray-600">Offline Store</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-extrabold">75<span className="text-orange-500"> +</span></h3>
            <p className="text-gray-600">Professional Team</p>
          </div>
        </div>
      </div>

      {/* About Us Concept Section Based on Image */}
<div className="w-full bg-white mt-28 px-4 md:px-12 lg:px-24 py-12">
  <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
    
    {/* Left: Image with Badge */}
    <div className="relative w-full lg:w-1/2 flex justify-center">
      <img
        src={review} 
        alt="Auto Parts"
        className="w-full max-w-[600px] h-auto rounded shadow-md mt-6 sm:mt-[60px]"
      />
      <div className="absolute top-4 left-4 bg-white px-6 py-4 rounded shadow-lg text-center">
        <h2 className="text-4xl font-bold text-orange-500">24+</h2>
        <p className="text-gray-800 text-sm font-semibold">Years Experience</p>
      </div>
    </div>

    {/* Right: Text Content */}
    <div className="w-full lg:w-1/2">
      <p className="text-sm font-semibold text-gray-500 uppercase mb-2">About Us</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        The Driving Force of Engineering,<br /> Powered by Reliability
      </h2>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
       At Spare Part Hub, we specialize in delivering high-quality auto parts that keep vehicles running smoothly. With over two decades in the industry, our passion for precision and performance has helped us become a trusted name among mechanics, workshops, and car owners.
      </p>

      {/* Services */}
      <div className="space-y-6">
        {/* Auto Part Store */}
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a4 4 0 00-8 0v2M5 11h14l1 9H4l1-9z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900">Auto Part Store</h4>
            <p className="text-gray-600 text-sm">
We stock a wide range of OEM and aftermarket car components for different makes and models. From engine components to accessories, our store is designed to be a one-stop solution for every automotive need.            </p>
          </div>
        </div>

        {/* Auto Service */}
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 p-3 rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900">Auto Service</h4>
            <p className="text-gray-600 text-sm">
Our team is committed to helping customers find the right fit every time. With expert guidance, fast response, and reliable service, we ensure a smooth experience — whether you're replacing a part or upgrading performance.            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Features 4 icons */}
<div className="w-full bg-white py-12 px-4 md:px-12 lg:px-24">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Feature 1 */}
    <div className="flex items-start gap-4 sm:border-r border-gray-200 pr-4">
      <div className="text-orange-500 text-3xl">
        <i className="fas fa-truck"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900">Free Shipping</h4>
        <p className="text-gray-600 text-sm">
          Donec eros laoreet auctor nostra in platea porttitor suscipit.
        </p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="flex items-start gap-4 sm:border-r border-gray-200 pr-4">
      <div className="text-orange-500 text-3xl">
        <i className="fas fa-credit-card"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900">Secure Payment</h4>
        <p className="text-gray-600 text-sm">
          Donec eros laoreet auctor nostra in platea porttitor suscipit.
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="flex items-start gap-4 sm:border-r border-gray-200 pr-4">
      <div className="text-orange-500 text-3xl">
        <i className="fas fa-shield-alt"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900">30 Days Warranty</h4>
        <p className="text-gray-600 text-sm">
          Donec eros laoreet auctor nostra in platea porttitor suscipit.
        </p>
      </div>
    </div>

    {/* Feature 4 */}
    <div className="flex items-start gap-4">
      <div className="text-orange-500 text-3xl">
        <i className="fas fa-headset"></i>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900">24/7 Support</h4>
        <p className="text-gray-600 text-sm">
          Donec eros laoreet auctor nostra in platea porttitor suscipit.
        </p>
      </div>
    </div>

  </div>
</div>

</div>
);
}
