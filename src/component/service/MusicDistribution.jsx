// import React from "react";
// import { musicDistData } from "../../data/service";

// const MusicDistribution = () => {
//   return (
//     <div className="w-full py-20 lg:py-40 grid grid-cols-1 lg:grid-col-2">
//       <div className="w-full flex flex-col gap-10 lg:pl-50 lg:pr-30">
//         {musicDistData?.map((item, itemIndex) => (
//           <div
//             key={itemIndex}
//             className={`flex lg:flex-row items-center lg:items-start flex-col col-span-1 gap-6 ${
//               itemIndex % 2 === 1 ? "lg:justify-end lg:ml-auto" : ""
//             }`}
//           >
//             <div className="w-[80px] hieght-[60px]">
//               <img src={`/images/${item?.image}`} alt="" />
//             </div>
//             <div className="lg:max-w-[40%] px-4 lg:px-0 text-center lg:text-left">
//               <h1 className="text-4xl uppercase font-bold mb-4">
//                 {item?.title}
//               </h1>
//               <span className="text-[20px]">{item?.description}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MusicDistribution;
