import React from 'react'
import ArrowBack from '@/components/ArrowBack/ArrowBack'

const HeaderItem = ({v, nav, principal,transparent, whiteArrow}) => {
  return (
    <div className={`w-full flex justify-center items-center  relative ${transparent ? 'bg-transparent' : 'bg-white'}`}>
        {
          !principal && <ArrowBack absolute nav={nav ? nav : '/'} white={whiteArrow} />
        }
        <div className='flex flex-col justify-center items-center'>
          <img src={`/assets/images/logo_${v}.png`} alt="logo" className="w-44 py-4" />
        </div>
    </div>
  )
}

export default HeaderItem