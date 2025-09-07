import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.7,
        color: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: 4.4,
        color: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img2,
        title: "Fashin T-Shirt",
        rating: 4.5,
        color: "Pink",
        aosDelay: "800",
    },
];
const Products = () => {
    return (
        <div >
            <div className='flex justify-center pt-18 flex-col dark:text-white dark:bg-gray-900 duration-200'>
                {/* Header section */}
                <div className='text-center mb-10 max-w-[600px]  mx-auto'>
                    <p data-aos="fade-up" className='text-primary text-sm font-bold' >Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className='text-black font-bold text-4xl dark:text-white '>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>
                {/* Body section */}
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                place-items-center gap-5'>
                        {/* card section */}
                        {ProductsData.map((data) => {
                            return (
                                <div
                                 key={data.id}
                                 data-aos="fade-up"
                                 data-aos-delay={data.aosDelay}
                                 >
                                    <img
                                        src={data.img}
                                        alt=''
                                        className='h-[220px] w-[150px] object-cover rounded-md' />
                                    <div >
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className='text-sm text-gray-600 dark:text-gray-400'>{data.color}</p>
                                        <div className='flex items-center'>
                                            <FaStar className='text-yellow-400' />
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <center>               
                         <button className='bg-primary px-10 py-2 rounded-full text-white font-bold  mt-10 mb-6'>View All</button>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Products