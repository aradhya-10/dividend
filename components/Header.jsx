// import Link from "next/link";
// import React from "react";

// const Header = () => {
//   return <>
// <header
//   x-data="
//         {
//           navbarOpen: false,
//         }
//       "
//   className="absolute left-0 top-0 z-50 w-full"
// >
//   <div className="container mx-auto">
//     <div className="relative -mx-4 flex items-center justify-between">
//       <div className="w-60 max-w-full px-4">
//         <a href="javascript:void(0)" className="block w-full py-5">
//           <img
//             src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
//             alt="logo"
//             className="w-full"
//           />
//         </a>
//       </div>
//       <div className="flex w-full items-center justify-between px-4">
//         <div>
//           <button
//             onCick="navbarOpen = !navbarOpen"
//             // className="navbarOpen && 'navbarTogglerActive'"
//             id="navbarToggler"
//             className="ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
//           >
//             <span
//               className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
//             ></span>
//             <span
//               className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
//             ></span>
//             <span
//               className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
//             ></span>
//           </button>
//           <div
//             x-transition 
// 			// className="!navbarOpen && 'hidden'"
//             id="navbarCollapse"
//             className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
//           >
//             <ul className="block lg:flex">
//               <li>
//                 <a
//                   href="javascript:void(0)"
//                   className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="javascript:void(0)"
//                   className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
//                 >
//                   Payment
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="javascript:void(0)"
//                   className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
//                 >
//                   Features
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
//           <a
//             href="javascript:void(0)"
//             className="text-dark hover:text-primary py-3 px-7 text-base font-medium"
//           >
//             Login
//           </a>
//           <a
//             href="javascript:void(0)"
//             className="bg-primary rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
//           >
//             Sign Up
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>


// <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-[150px]">
//   <div className="container mx-auto">
//     <div className="-mx-4 flex flex-wrap">
//       <div className="w-full px-4 lg:w-5/12">
//         <div className="hero-content">
//           <h1
//             className="text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
//           >
//             Kickstart <br />
//             Startup Website <br />
//             with TailGrids.
//           </h1>
//           <p className="text-body-color mb-8 max-w-[480px] text-base">
//             With TailGrids, business and students thrive together. Business can
//             perfectly match their staffing to changing demand throughout the
//             dayed.
//           </p>
//           <ul className="flex flex-wrap items-center">
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 className="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
//               >
//                 Get Started
//               </a>
//             </li>
//             <li>
//               <a
//                 href="javascript:void(0)"
//                 className="text-body-color hover:text-primary inline-flex items-center justify-center py-4 px-6 text-center text-base font-normal sm:px-10 lg:px-8 xl:px-10"
//               >
//                 <span className="mr-2">
//                   <svg
//                     width="22"
//                     height="22"
//                     viewBox="0 0 22 22"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <circle cx="11" cy="11" r="11" fill="#3056D3" />
//                     <rect
//                       x="6.90906"
//                       y="13.3636"
//                       width="8.18182"
//                       height="1.63636"
//                       fill="white"
//                     />
//                     <rect
//                       x="10.1818"
//                       y="6"
//                       width="1.63636"
//                       height="4.09091"
//                       fill="white"
//                     />
//                     <path
//                       d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
//                       fill="white"
//                     />
//                   </svg>
//                 </span>
//                 Download App
//               </a>
//             </li>
//           </ul>
//           <div className="clients pt-16">
//             <h6
//               className="text-body-color mb-2 flex items-center text-xs font-normal"
//             >
//               Some Of Our Clients
//               <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
//             </h6>
//             <div className="flex items-center">
//               <div className="mr-4 w-full py-3">
//                 <img
//                   src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
//                   alt="ayroui"
//                 />
//               </div>
//               <div className="mr-4 w-full py-3">
//                 <img
//                   src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
//                   alt="graygrids"
//                 />
//               </div>
//               <div className="mr-4 w-full py-3">
//                 <img
//                   src="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
//                   alt="uideck"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hidden px-4 lg:block lg:w-1/12"></div>
//       <div className="w-full px-4 lg:w-6/12">
//         <div className="lg:ml-auto lg:text-right">
//           <div className="relative z-10 inline-block pt-11 lg:pt-0">
//             <img
//               src="https://cdn.tailgrids.com/2.0/image/marketing/images/hero/hero-image-01.png"
//               alt="hero"
//               className="max-w-full lg:ml-auto"
//             />
//             <span className="absolute -left-8 -bottom-8 z-[-1]">
//               <svg
//                 width="93"
//                 height="93"
//                 viewBox="0 0 93 93"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
//                 <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
//                 <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
//                 <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
//                 <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
//                 <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
//                 <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
//                 <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
//                 <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
//                 <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
//                 <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
//                 <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
//                 <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
//                 <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
//                 <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
//                 <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
//                 <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
//                 <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
//                 <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
//                 <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
//                 <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
//                 <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
//                 <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
//                 <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
//                 <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </>;
// };

// export default Header;
