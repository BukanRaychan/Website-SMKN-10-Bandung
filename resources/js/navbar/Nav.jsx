import React, { useState } from 'react'
import logo_sma from '../assets/img/Logo-SMK-10-Bandung.png'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from "react-icons/hi";
import LargeScreenNavLink from './LargeScreenNavLink'
import SmallScreenNavLink from './SmallScreenNavLink'
import DropdownNavLink from './DropdownNavLink'
import { PembelajaranData, PrestasiData, ProfilData, jurusanData } from '../data/NavSubItem'

function Nav() {
  const [click, setClick] = useState(false)

  const handleClickLink = () => {
    setClick(false)
  }

  const content = (
    <div className='lg:hidden block absolute w-full left-0 right-0 bg-white transition'>
      <ul className='text-center text-[14px]'>
        <SmallScreenNavLink title="Home" endpoint="/" handleClick={handleClickLink}/>
        <SmallScreenNavLink title="Profil" handleClick={handleClickLink} subMenu={ProfilData}/>
        <SmallScreenNavLink title="Pembelajaran"  handleClick={handleClickLink} subMenu={PembelajaranData}/>
        <SmallScreenNavLink title="Jurusan" handleClick={handleClickLink} subMenu={jurusanData}/>
        <SmallScreenNavLink title="Prestasi" handleClick={handleClickLink} subMenu={PrestasiData}/>
        <SmallScreenNavLink title="Blog" endpoint="/blog" handleClick={handleClickLink}/>
        <SmallScreenNavLink title="Hubungi Kami" endpoint="/contact-us" handleClick={handleClickLink}/>
      </ul>
    </div>
  )

  return (
    <nav className=''>
      <div className='z-50'>
        <div className='h-10vh flex justify-between border-b border-grey bg-white text-black px-10 md:px-20 py-4'>
          <div className='flex items-center justify-center cursor-default'>
            <img className='size-10' src={logo_sma} alt='SMK 10 Bandung Logo' />
            <div className='hidden md:block  ms-2 text-[14px] font-semibold'>
              SMKN 10 Bandung
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='hidden lg:block'>
              <ul className='flex gap-7 text-[14px] font-medium'>
                <LargeScreenNavLink title="Home" endpoint="/"/>
                <DropdownNavLink title="Profil" subMenu={ProfilData}/>
                <DropdownNavLink title="Pembelajaran" subMenu={PembelajaranData}/>
                <DropdownNavLink title="Jurusan" subMenu={jurusanData}/>
                <DropdownNavLink title="Prestasi" subMenu={PrestasiData}/>
                <LargeScreenNavLink title="Blog" endpoint="/blog"/>
                <LargeScreenNavLink title="Hubungi Kami" endpoint="/contact-us"/>
              </ul>
            </div>
          </div>
          <button className='block lg:hidden transisition scale-150' onClick={() => setClick(!click)}>
            {click ? <FaTimes /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
      <div>
        {click && content}
      </div>
    </nav>
  )
}

export default Nav;