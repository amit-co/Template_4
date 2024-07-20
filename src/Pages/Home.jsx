import { Suspense } from "react";
import img from "/New/BG.png";
import img1 from "/New/home_bg.png";
import img2 from "/New/Frame 85.png";
import img3 from "/New/bookimg.png";
import img4 from "/Group 85.png";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Quote from "../Components/Quote";
import img8 from "/New/Gallery.png";
import img9 from "/New/Drinks.png";
import img10 from "/New/Food.png";
import img11 from "/New/Team.png";
import cafe_img from "/New/cafe_img.png";
import Cafe from "/New/Cafe.png";
import ird from "/New/ird.png";
import h1 from "/New/h1.png";
import h2 from "/New/IRD_h.png";
import bar_h from "/New/bar_h.png";
import bar_img from "/New/bar.png";
import pdf from "/New/pdf.png";
import img12 from "/New/Group 78.png";
import img13 from "/New/Group 79.png";



export default function Home() {
    const initialFormData = {
        date: new Date(),
        time: "16:00",
        name: "",
        email: "",
        phone: "",
        occassion: "", 
    }
    const [formData, setFormData] = useState(initialFormData);
    const clickHandler = () => {
        window.location.href = 'https://reserve-ocean-website.vercel.app/restaurantDetail/Chon%20Thai%20Cuisine';
    };
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prev) => ({
            ...prev,
            date: date,
        }));
    };

   

    return (
        <div className="bg-fixed bg-cover pb-10 pt-2" style={{ backgroundImage: `url(${img})` }}>  
            <div className="relative w-full h-full  overflow  bg-cover mb-2 md:mb-[5vh] mt-24 flex items-center justify-end px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="flex w-full h-full">
                    <img src={img1} className="object-cover sm:w-full  sm:h-2/12"/>
                    </div>
                <div className="absolute flex flex-col md:w-6/12 w-72 sm:left-0 left-20">
                    <div className="flex w-40 sm:w-full sm:mt-0">
                        <img src={img2} className="mx-auto " />
                    </div>
                    
                    <div className="flex md:w-8/12  mx-auto 2xl:w-9/12 ">
                        <p className="text-center hidden md:block text-customWhite tracking-widest ">We Want Our Customers To Feel As Though They Are At Home. They Can Stay As Long As They Want.
                            Relaxing All Day Or Evening - Grazing On Mouth-Watering Dishes. Looked After By Our Welcoming, Attentive Staff. Customers Will Always Be
                            Encouraged To Linger. Working On A Laptop Or Reading A Paper.
                        </p>
                    </div>
                    <div className="flex flex-col sm:ml-1 lg:ml-40 sm:mt-6   text-white">
                        <h1 className=" text-sm sm:text-lg md:text-xl lg:text-2xl tracking-widest font-bold ml-6 lg:ml-14">OPENING TIME</h1>
                        <h1 className="tracking-normal lg:tracking-widest text-xs lg:text-xl">Monday - Friday 10 Am - 10Pm</h1>
                        <h1 className="tracking-normal lg:tracking-widest text-xs lg:text-xl">Saturday - Sunday 12 Pm - 12Am</h1>
                        <div className="flex ml-1 lg:ml-20 mt-2">
                            <button onClick={clickHandler} className="tracking-widest border px-2 lg:px-4 py-2">Find A Table</button>
                        </div>
                        <div className="flex hidden sm:block sm:flex-col ml-10">
                            <h1 className=" text-white text-base lg:text-xl mt-8">Tel - +44 (0) 208759 7755</h1>
                            <h1 className="text-white text-base lg:text-xl mt-2">Email - franky.rodrigues@hilton.com</h1>
                            <p className=" text-white text-sm lg:text-xl mt-2">ADDRESS- Terminal Four, Hounslow,  </p>
                            <p className=" text-white text-sm lg:text-xl mt-2">TW6 3AF, United Kingdom</p>
                        </div>

                        </div>
                </div>
            </div>

            <div className="flex mx-auto mt-20 sm:hidden">
                <div className="flex w-11/12 h-60 bg-customGray2 bg-opacity-75 mx-auto">
                    <div className="flex flex-col  w-9/12 h-60 bg-customBlack2 bg-opacity-100 ml-10 top-[90vw] absolute ">

                        <div className="flex flex-col  ml-14">
                            <h1 className=" text-white text-auto  mt-8">Tel - +44 (0) 208759 7755</h1>
                            <h1 className="text-white text-auto  mt-2">Email - franky.rodrigues@hilton.com</h1>
                            <p className=" text-white text-auto mt-2">ADDRESS- Terminal Four, Hounslow,  </p>
                            <p className=" text-white text-auto  mt-2">TW6 3AF, United Kingdom</p>
                        </div>
                      
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:h-[45vh] lg:h-[60vh] h-[45vh] bg-customBlack2 bg-opacity-75 sm:mb-10 mx-0 mt-32 md:mx-8 ">
                <div className="flex flex-col lg:flex-row my-auto ">
                    <div className="container my-auto text-center ">
                        <h1 className="text-white md:text-3xl sm:text-3xl mt-2 md:mt-0 text-xl lg:text-6xl tracking-widest">About Us</h1>
                    </div>
                    <div className="container w-full  lg:w-[300vh] mt-3 lg:mt-0  ">
                        <p className="text-xs text-left sm:text-base lg:text-lg text-white mx-4 tracking-widest ">Our Aim Is To Provide A Welcoming All-Day Experience Rooted In Care For Our Customers, Staff, Produce And Land.
                            At Oxbo We Want Our Customers To Feel As Though They Are At Home. They Can Stay As Long As They Want. Relaxing All Day Or Evening - Grazing
                            On Mouth-Watering Dishes, Looked After By Our Welcoming, Attentive Staff. Customers Will Always Be Encouraged To Linger. Working On A Laptop
                            Or Reading A Paper . Even After They've Finished Their Latte Or Lunch.
                        </p>

                        <button className="text-white border text-base sm:text-lg md:text-xl lg:text-2xl tracking-widest px-4 mt-4 mb-4 lg:mb-0 lg:mt-4 py-2 ml-4">Read More</button>
                    </div>
                </div>
            </div>
            <div className="h-[2px] bg-customGray2 sm:mb-10 sm:mx-8"></div>

            <div className="relative flex flex-col sm:h-full pb-20 sm:pb-0 sm:mx-10 ">
                <img src={h1} className="sm:hidden w-9/12 h-20 object-contain ml-12" />
                                         <div className="flex sm:flex-row flex-col mt-10 lg:mt-24 relative ">
                                                <div className="flex sm:w-8/12 w-11/12 sm:h-[363px] h-72 bg-customGray2 bg-opacity-75">
                                                    <div className="flex flex-row sm:w-[561px] w-11/12 h-72 sm:h-[363px] bg-customBlack2 bg-opacity-75 absolute ml-8 -mt-8 sm:ml-20 sm:top-[-60px] sm:left-[-10px]">
                                                        <img src={cafe_img} className="sm:my-10 my-8 sm:mx-10 mx-8 " />
                                                        <div className="flex flex-col text-white sm:-ml-8 mx-auto">
                                                            <img src={Cafe} className="sm:w-[83px] w-10 h-10 sm:h-[67px] object-contain sm:mt-12 sm:ml-10 " />
                                                            <p className="sm:w-[200px] hidden sm:block w-[150px] h-[50px] sm:text-center text-sm">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                            <img src={pdf} className="object-contain sm:w-[45px] sm:h-[45px] mt-32 mx-auto" />
                                                        </div>

                                                    </div>
                                                </div>

                                               <div className="flex hidden sm:block flex-col mx-auto">
                                                    <img src={h1} className="w-9/12 h-20 object-contain ml-2 lg:ml-28" />
                                                     <div className="flex mt-24 ">
                                                            <div className="flex sm:w-[555px] w-11/12 h-72 sm:h-[363px] bg-customGray2 bg-opacity-75 sm:mt-20 sm:ml-36 ">
                                                                <div className="flex flex-col lg:flex-row sm:w-[561px] w-11/12 h-72 sm:h-[363px] bg-customBlack2 bg-opacity-75 absolute sm:mr-32 sm:-mt-16 sm:right-[-70px]">
                               
                                                                    <div className="flex flex-col text-white  mx-6">
                                                                        <img src={bar_h} className="w-[89px] h-[67px] object-contain sm:mt-14 ml-12" />
                                                                        <p className="sm:w-[200px] hidden sm:block sm:h-[50px]  text-center text-sm">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                            Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                                        <img src={pdf} className="object-contain sm:w-[45px] sm:h-[45px] mt-32 mx-auto" />
                                                                    </div>
                                                                    <img src={bar_img} className="sm:my-10  sm:-mx-5 " />
                                                                </div>
                                                            </div>
                                                     </div>
                                                            <div className="flex flex-row ml-20 sm:mt-20 justify-center space-x-4">
                                                                <img src={img12} className=" w-[355px] h-[241px] object-contain" />
                                                                <button className="w-[198px] h-[68px] text-white absolute border  bg-customBlack2 sm:mt-24">Load More</button>
                                                                <img src={img13} className=" w-[256px] h-[176px] mt-10 object-contain"/>
                                                            </div>
                                               </div>
                   
                                         </div>
                                              <div className="flex  mt-44  sm:-mt-60">
                                                   <div className="flex sm:w-[561px] w-11/12 h-72 sm:h-[363px] bg-customGray2 bg-opacity-75  -mt-20 ">
                                                        <div className="flex flex-row sm:w-[561px] w-11/12 h-72 sm:h-[363px] bg-customBlack2 bg-opacity-75 absolute sm:ml-20 ml-8 -mt-10 sm:-mt-16 sm:left-[-10px]">
                                                            <img src={ird} className="my-10  mx-10 " />
                                                            <div className="flex flex-col text-white -ml-8">
                                                                <img src={h2} className="sm:w-[190px] sm:h-[45px] object-contain mt-14 -mx-1" />
                                                                <p className="sm:w-[200px] hidden sm:block sm:h-[50px] text-center text-sm">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                    Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                                <img src={pdf} className="object-contain sm:w-[45px] sm:h-[45px] mt-32 mx-auto" />
                                                            </div>

                                                        </div>
                                                   </div>
                                              </div>
                   </div>


            <div className="relative flex flex-col sm:h-[50vh] md:h-2/4 h-auto  bg-customBlack2 bg-opacity-75  items-center mt-10 mb-10">
                <div className="flex flex-col  items-center pb-4 ">
                                                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest sm:mt-10  mt-4">Venue</h1>
                                            <p className="text-white tracking-widest md:text-lg sm:text-base text-xs lg:text-xl text-center mt-4 px-6">Welcome To OXBO, Where Culinary Excellence Meets Unparalleled Hospitality. Nesteled In The Heart Of Walles,
                                                Our Restaurant Offers A Dynamic Dinning Experience That Celebrates The Fusion Of Modern And Traditional Flavours. At OXBO, We Pride Ourseleves On Sourcing
                                                The Finest Local Ingredients To Craft Innovative Dishes That Cater To A Variety Of Palates. Whether You're Indulging In Our  Signature  Creations Or Exploring
                                                Our Seasonal Specials. Each Meal Is A Journey Of Taste And Texture.Our Stylish Yet Cozy Ambiance. Complemented By Exceptional Service, Ensures That Every Visit
                                                Is Memorable. Join Us At OXBO And Savor The Art Of Fine Dining.
                                            </p>  
                                            <button className="text-white border text-base sm:text-lg md:text-xl lg:text-2xl mt-4 py-2 px-4 ">Load More</button>
                </div>
                                        </div>


            <div className="flex flex-col lg:flex-row h-full lg:h-[400px] bg-customBlack2 lg:mx-10 items-center mb-10">
                <img src={img3} className="w-6/12 h-12/12 hidden md:block lg:w-full lg:h-[400px]" />

                <div className="lg:flex  lg:w-full mx-auto ml-16 justify-center pb-10 pt-10">
                    <form className="md:w-10/12 mx-auto sm:mx-0">
                        <div className="md:flex grid grid-cols-2 md:space-x-8">
                            <div className="flex mt-2 lg:mt-0 flex-col">
                                <div className="flex justify-between">
                                    <label className="block text-white tracking-widest font-sm">First Name</label>
                                </div>
                                <input
                                    name="fname"
                                    onChange={changeHandler}
                                    value={formData.fname}
                                    type="text"
                                    id="fname"
                                    className="appearance-none w-10/12 lg:w-full bg-customGray2 bg-opacity-25 text-white px-3 py-2 rounded-lg focus:outline-none"
                                />
                            </div>
                            <div className="flex mt-2 lg:mt-0 flex-col">
                                <div className="flex justify-between">
                                    <label className="block text-white tracking-widest font-sm">Last Name</label>
                                </div>
                                <input
                                    name="lname"
                                    onChange={changeHandler}
                                    value={formData.lname}
                                    type="text"
                                    id="lname"
                                    className="appearance-none w-10/12 lg:w-full text-white px-3 py-2 bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="mt-4 md:flex grid grid-cols-2 lg:space-x-8 mx-auto">
                            <div className="flex flex-col ">
                                <label className="block text-white tracking-widest font-sm">DATE</label>
                                <DatePicker
                                    name="date"
                                    selected={formData.date}
                                    onChange={handleDateChange}
                                    dateFormat="dd/MM/yyyy"
                                    className="appearance-none text-white px-3 py-2 bg-customGray2 bg-opacity-25 w-10/12 lg:w-full rounded-lg focus:outline-none"
                                />
                            </div>
                            <div className="lg:w-6/12 w-10/12 md:mt-0 flex flex-col">
                                <label className="block text-white tracking-widest font-sm">TIME</label>
                                <select
                                    id="time"
                                    value={formData.time}
                                    name="time"
                                    onChange={changeHandler}
                                    className="appearance-none text-white px-3 py-2 bg-customGray2 bg-opacity-25 lg:w-11/12 rounded-lg focus:outline-none"
                                >
                                    {[
                                        "16:00",
                                        "16:30",
                                        "17:00",
                                        "17:30",
                                        "18:00",
                                        "18:30",
                                        "19:00",
                                        "19:30",
                                        "20:00",
                                        "20:30",
                                        "21:00",
                                        "21:30",
                                        "22:00",
                                        "22:30",
                                        "23:00",
                                    ].map((time) => (
                                        <option key={time} value={time} className="bg-black">
                                            {new Date(`1970-01-01T${time}Z`).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mt-4 md:flex grid grid-cols-2 md:space-x-8 mx-auto">
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <label className="block text-white tracking-widest font-sm">Contact</label>
                                </div>
                                <input
                                    type="number"
                                    id="phone"
                                    onChange={changeHandler}
                                    value={formData.phone}
                                    name="phone"
                                    className="appearance-none w-10/12 lg:w-full text-white px-3 py-2 bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                />
                            </div>
                            <div className="flex  lg:mt-0 flex-col">
                                <label className="block text-white tracking-widest font-sm">OCCASION</label>
                                <input
                                    type="text"
                                    id="occasion"
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={changeHandler}
                                    className="appearance-none w-10/12 lg:w-full text-white px-3 py-2 bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                />
                            </div>
                        </div >
                        <div className="flex flex-col items-center mr-4 lg:mr-0">
                            <button onClick={clickHandler}  className="text-white tracking-widest  border px-4 py-2 lg:mx-auto lg:ml-40 mt-8 lg:mt-4">
                            Find A Table
                        </button>
                            <img src={img4} className=" mt-8 lg:ml-32 w-[150px] lg:mx-auto lg:w-[199px] h-[52px] " />
                        </div>
                    </form>
                </div>
            </div>


            <div className=" flex flex-col  md:h-[600px] h-auto  w-full pb-32 md:mb-20">
                <div className="flex md:mt-4  md:mb-16 md:ml-10">
                    <img src={img8} className="md:w-[202px] md:h-[70px] mx-auto object-contain " />
                </div>
                       
                  <div className="flex flex-col md:flex-row  relative md:space-x-20 space-y-20 md:space-y-0 mx-auto mb-32 mt-6 md:mt-0 md:mb-20 ">
                    <div className="flex w-[350px]  h-[350px] bg-customGray2 bg-opacity-75   overflow-hidden">
                        <img src={img9} className="absolute w-[350px] h-[350px] top-[50px] left-[30px] transition-transform duration-300 ease-in-out hover:transform hover:scale-110 " />
                            <h1 className="text-white  text-5xl tracking-widest mt-14 ml-12 absolute">Drinks</h1>
                    </div>
                    <div className="flex w-[350px] h-[350px] bg-customGray2 bg-opacity-75 overflow-hidden ">
                        <img src={img10} className="absolute w-[350px] h-[350px] md:top-[50px] top-[460px] mx-10 transition-transform duration-300 ease-in-out hover:transform hover:scale-110 " />
                        <h1 className="text-white text-5xl  tracking-widest mt-14 ml-12 absolute">Food</h1>
                    </div>
                    <div className="flex w-[350px] h-[350px]  bg-customGray2 bg-opacity-75  overflow-hidden">
                        <img src={img11} className="absolute w-[350px] h-[350px]  md:top-[50px] -bottom-[30px] right-[-30px] transition-transform duration-300 ease-in-out hover:transform hover:scale-110" />
                        <h1 className="text-white text-5xl tracking-widest mt-14 ml-12 absolute">Team</h1>
                    </div>
                  </div>
            </div>
                

            <div className=" flex  sm:h-[400px] bg-customGray2 mx-10 opacity-75 items-center ">
                <div className="container mx-auto px-10 py-4">
                    <Quote />
                    </div>
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
               
            </Suspense>
        </div>
    );
}
