import React from 'react'
import logo from "../../assets/logo.png"
import { MdSearch } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";



const Navbar = ({ theme, setTheme }) => {
    let style_li = `inline-block w-full rounded-md p-2 hover:bg-primary/20 .33  hover:text-primary  `;
    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white'>
            {/* upper navbar*/}
            <div className='bg-primary/40 py-2 w-full'>
                <div className='container flex justify-between items-center max-w-full'>
                    <div className='ml-4 md:ml-16'>
                        <a className=' font-bold text-2xl sm:text-3xl flex  flex-row row-auto gap-2'>
                            <img src={logo} className='w-10   ' />
                            Shopsy
                        </a>
                    </div>
                    {/* search bar and order button */}
                    <div className='flex items-center gap-5 mr-3 md:mr-16  justify-end  '>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='relative group hidden sm:block'>
                                <input type='text' placeholder='Search' className=' w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary bg-white  dark:border-gray-500 dark:bg-gray-800' />
                                <MdSearch className='text-gray-500
                            group-hover:text-primary absolute top-1/2 -translate-y-1/2 
                            right-3'/>
                            </div>
                        </div>
                        {/* order button*/}
                        <button onClick={() => {
                            alert("order is not available")
                        }}
                            className='bg-gradient-to-r from-primary
                    to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex
                    items-center gap-3 group'>
                            <span className='group-hover:block hidden transition-all duration-300'>
                                Order
                            </span>
                            <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer
                        '/>
                        </button>
                        {/* drak mode switch */}
                        <DarkMode setTheme={setTheme} theme={theme} />
                    </div>

                </div>
            </div>
            {/* lower navbar */}
            <div className='flex justify-center bg-white text-black text-lg font-bold  dark:bg-gray-900 dark:text-white '>
              <ul className=' flex gap-16 py-3'>
                <li className='hover:text-primary'>Home</li>
                <li className='hover:text-primary'>Top Rated</li>
                <li className='hover:text-primary'>Kids Wear</li>
                <li className='hover:text-primary'>Mens Wear</li>
                <li className='hover:text-primary'>Electronics</li>
                <li className='flex gap-1.5 items-center group relative hover:text-primary'> Trending Products
                    <span className='transition-all duration-200 group-hover:rotate-180'><FaCaretDown/></span>
                    <div className='hidden absolute z-[999] group-hover:block w-[200px]  rounded-bl-md shadow-md bg-white text-black p-2 text-sm font-medium top-7 dark:bg-gray-900 dark:text-white'>
                        <li className={style_li}>Trending Products</li>
                        <li className={style_li}>Best Selling</li>
                        <li className={style_li}>Top Rated</li>
                    </div>
                </li>
              </ul>
            </div>
        </div>
    )
}

export default Navbar