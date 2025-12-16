import React, { useState } from 'react'
import logo from './assets/logo.svg'
import sunIcon from './assets/icon-sun.svg'
import moonIcon from './assets/icon-moon.svg'
import dataJson from '../data.json'
import Card from './Card'

const App = () => {
  const [data, setData] = useState(dataJson)
  const [filter, setFilter] = useState('all')
  const [isLight, setIsLight] = useState(false)

  const filteredData = data.filter(ext => {
    if (filter === 'all') return true
    if (filter === 'active') return ext.isActive === true
    if (filter === 'inactive') return !ext.isActive
  })

  const removeExt = extName => {
    setData(prevExtList => prevExtList.filter(ext => ext.name !== extName))
  }

  return (
    <div className={`${isLight ? 'light' : ''}`}>
      <div
        style={{
          background: isLight
            ? 'linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%)'
            : 'linear-gradient(180deg, #040918 0%, #091540 100%)',
        }}
        className={`min-h-screen flex ${
          isLight ? 'text-neutral-700' : 'text-white'
        } `}
      >
        <div className="max-w-280 w-full px-5 sm:px-10 py-9 mx-auto">
          <div
            className={`p-2 w-full flex justify-between items-center ${
              isLight ? 'bg-neutral-0' : 'bg-neutral-800'
            }  rounded-lg `}
          >
            <div className="text-neutral-300 light:text-neutral-800 font-bold text-lg">
              <img
                src={logo}
                alt=""
                className={` ${
                  isLight ? '' : 'brightness-[500] saturate-0'
                }  light:brightness-100 light:saturate-100`}
              />
            </div>
            <button
              className={`rounded-md p-2 cursor-pointer hover:opacity-80 transition-opacity ${
                isLight ? 'bg-neutral-300' : 'bg-neutral-600/60'
              }`}
              onClick={() => setIsLight(!isLight)}
            >
              <img src={isLight ? moonIcon : sunIcon} alt="theme toggle" />
            </button>
          </div>

          <div className="flex justify-between items-center my-10 max-[657px]:flex-col max-[657px]:gap-4">
            <h2 className="font-bold text-3xl">Extensions List</h2>
            <ul className="flex gap-3">
              {['all', 'active', 'inactive'].map((item, i) => (
                <li
                  key={i}
                  className={`${
                    isLight ? 'bg-neutral-0 border border-neutral-200 text-neutral-900' : 'bg-neutral-700/80 '
                  } rounded-full py-1.5 px-4 transition-all duration-300 hover:text-neutral-900 hover:bg-r-400 ${
                    filter === item
                      ? 'text-neutral-900 bg-r-400'
                      : 'text-neutral-0 light:text-neutral-700'
                  }`}
                >
                  <button
                    className="capitalize cursor-pointer"
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-3">
            {filteredData.map((ext, i) => (
              <Card
                key={i}
                logo={ext.logo}
                name={ext.name}
                des={ext.description}
                isActive={ext.isActive}
                handleRemoveClick={removeExt}
                isLight={isLight}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
