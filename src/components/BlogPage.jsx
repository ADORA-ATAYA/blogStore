import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GrView, GrBookmark } from "react-icons/gr";
import { IoIosShareAlt } from "react-icons/io";

const BlogPage = () => {
  return (
    <div className='bg-orange-500 h-full text-white pt-20'>
      BLOGPAGE
    </div>
  )
}

//   return (
//     <div className="bg-orange-500 text-white flex flex-wrap gap-2 w-4/5 mx-auto my-0 mt-24 p-4">
//       <div className="w-1/4 p-2">
//         <div>
//           <img src={blog.thumbnail} alt="icon" className="w-56 mx-auto my-0" />
//         </div>
//         <div className="outline outline-1 mt-2 p-2 text-black font-bold">
//           <ul>
//             <span className="text-3xl">Table of Content</span>
//             {blog.table_of_content.map((item, itemIndex) => (
//               <li key={itemIndex} className="text-lg cursor-pointer">
//                 {" "}
//                 - {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="w-3/5">
//         <div>
//           <h1 className="text-5xl mb-8 text-slate-950 font-bold">
//             {blog.title}
//           </h1>
//           <div className="outline outline-1 p-2 m-4 flex justify-start gap-1 text-xl">
//             <span className="m-2 text-2xl">
//               <GrView style={{ display: "inline" }} /> : {blog.views.length}
//             </span>
//             <span className="m-2 text-2xl cursor-pointer">
//               <AiOutlineLike
//                 style={{ display: "inline" }}
//                 onClick={() => {
//                   console.log("update likes");
//                 }}
//               />{" "}
//               : {blog.likes.length}
//             </span>
//             <span
//               className="m-2 text-2xl cursor-pointer"
//               onClick={() => {
//                 console.log("add to bookmark");
//               }}
//             >
//               <GrBookmark style={{ display: "inline" }} />
//             </span>
//             <span
//               className="m-2 text-2xl cursor-pointer"
//               onClick={() => {
//                 console.log("share");
//               }}
//             >
//               <IoIosShareAlt style={{ display: "inline" }} />
//             </span>
//           </div>
//         </div>
//         <div>
//           {blog.content.map((content, index) => (
//             <div key={index} className="mb-3">
//               <h2 className="text-3xl text-slate-950 font-semibold">
//                 {content.heading}
//               </h2>
//               {content.image && (
//                 <img
//                   src={content.image}
//                   alt={content.image_description}
//                   className="w-40 mx-auto my-8"
//                 />
//               )}
//               {content.body.map((body, index) => (
//                 <p className="text-xl" key={index}>
//                   {body}
//                 </p>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default BlogPage;
