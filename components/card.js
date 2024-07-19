import React from "react";

export default function CardOne(props) {
  return (
    <div className="mb-56 max-w-4xl mx-auto bg-[#FFF7D4] shadow-lg rounded-lg overflow-hidden h-[500px]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="md:flex-shrink-0 h-full">
          <img className="h-full w-full object-cover" src={props.imageO} alt="Image cap"/>
        </div>
        <div className="p-6 h-full flex flex-col justify-center">
          <h5 className="font-bold text-[#82CD47] text-4xl mb-2 font-pixelify-sans">{props.title}</h5>
          <p className="text-gray-700 text-base mb-4">
            {props.description}
          </p>
          <a href={props.cardLink} className="hover:bg-[#9BEC00] hover:text-[#059212] text-[#9CFF2E] font-pixelify-sans bg-[#059212] py-4 px-4 rounded text-xl">
            {props.buttonContent}
          </a>
        </div>
      </div>
    </div>
  );
}
