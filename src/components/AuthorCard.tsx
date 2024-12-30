import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-neutral-200 shadow-2xl rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500"
          src="../images/authore.jpg"
          alt="Authore imge"
        />

        <div>
          <h3 className="text-xl font-bold">Neil-gaiman</h3>
          <p className="text-slate-500">
          Tech Blogger | Seo Expert |   Writer
          </p>
        </div>
      </div>

<p className="mt-4 text-black leading-relaxed">A passionate engineer and developer with expertise in building innovative solutions 
  and tackling complex technical challenges. Skilled in software development, problem-solving, and 
  crafting efficient, user-friendly applications. Dedicated to continuous learning and delivering
   impactful results through technology.</p>

   <div className="mt-4 flex space-x-3">
    <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-400 transi">
Linkdin
    </a>

    <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-400 transi">
Github
    </a>

   </div>

    </div>
  );
}
