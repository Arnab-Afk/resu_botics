import React from 'react'

export default function BackButton() {
  return (
    <div className="absolute top-4 left-4 z-10">
    <button className="bg-[#06D001] text-black hover:bg-lime-200 hover:text-[#06D001] font-vt323 font-bold py-2 px-4 rounded">
        <a className="no-underline text-3xl" href='/'>🔙</a>
    </button>
    </div>
  )
}
