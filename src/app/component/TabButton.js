import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white ' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
        <p  className={`mr-3 font-semibold text-lg  hover:text-white hover:border-b border-purple-500
     ${buttonClasses} `}>{children} 
            
        </p>
     </button>

  )
}

export default TabButton