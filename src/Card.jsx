import React, { useState } from 'react'

const Card = ({ logo, name, des, isActive, handleRemoveClick, isLight }) => {
  // const [isEnabled, setIsEnabled] = useState(false)
  return (
    <article
      className={`rounded-xl flex flex-col gap-4 p-6 ${
        isLight
          ? 'bg-neutral-0 border-neutral-100'
          : 'bg-neutral-800 border-neutral-600'
      } border  min-h-46`}
    >
      <div className="flex gap-3 items-start justify-start">
        <img src={logo} alt="" className="shrink-0" />
        <div className="flex-1">
          <h3 className="font-bold">{name}</h3>
          <p
            className={`text-left ${
              isLight ? 'text-neutral-600' : 'text-neutral-300'
            } text-xs md:text-sm mt-1`}
          >
            {des}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <button
          className="cursor-pointer border border-neutral-400 rounded-full py-1 px-3 text-sm"
          onClick={() => handleRemoveClick(name)}
        >
          Remove
        </button>

        {/* Toggle Switch */}
        <button
          // onClick={() => {
          //   setIsEnabled(!isEnabled)
          // }}
          className={`cursor-pointer relative w-9 h-4.5 rounded-full transition-colors ${
            isActive
              ? 'bg-r-500'
              : `${isLight ? 'bg-neutral-200' : 'bg-neutral-600'}`
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 bg-white rounded-full transition-transform ${
              isActive ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </article>
  )
}

export default Card
