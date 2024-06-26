import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import LargeScreenNavLink from './LargeScreenNavLink';

function DropdownNavLink({ title, subMenu }) {
    return (
        <div className='group'>
            <div className='flex items-center group group-hover:text-tertiary cursor-default'>
                <li className='transition group-hover:border-b-1 group-hover:border-tertiary'>
                    {title}
                </li>
                <IoIosArrowDown />
            </div>
            <div className='group-hover:block hidden'>
                {subMenu && (
                    <div className='absolute pt-6'>
                            <div className='grid grid-cols-1 gap-4 drop-shadow-lg rounded-lg bg-white px-6 py-5'>
                                {subMenu.map((navLink , index) => (
                                    <LargeScreenNavLink
                                        key = {index}
                                        title={navLink.title}
                                        endpoint={navLink.endpoint}
                                    />
                                ))}
                            </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default DropdownNavLink