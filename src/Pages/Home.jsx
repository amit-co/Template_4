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
import RestrauntLocation from "../Components/RestrauntLocation";
import img5 from "/New/facebook.png";
import img6 from "/New/instagram.png";
import img7 from "/New/twitter.png";
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
import drinks_h from "/New/drinks_h.png";


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
        <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${img})` }}>
            
                
            <div className="relative w-full h-[45vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] overflow  bg-cover mb-[5vh] mt-[22vh] flex items-center justify-end px-4 sm:px-8 md:px-12 lg:px-16">
                
                <img src={img1} className="object-cover w-full h-full" />
                <div className="absolute container w-6/12 top-0 left-0 ml-32  ">
                    <img src={img2} className="ml-24" />
                    <div className="mr-24 ml-10">
                        <p className="text-white tracking-widest text-center ">We Want Our Customers To Feel As Though They Are At Home. They Can Stay As Long As They Want.
                            Relaxing All Day Or Evening - Grazing On Mouth-Watering Dishes. Looked After By Our Welcoming, Attentive Staff. Customers Will Always Be
                            Encouraged To Linger. Working On A Laptop Or Reading A Paper.
                        </p>
                    </div>
                    <div className="flex flex-col ml-40 mt-6 text-white">
                        <h1 className=" text-2xl tracking-widest font-bold ml-14">OPENING TIME</h1>
                        
                        <h1 className="tracking-widest text-xl">Monday - Friday 10 Am - 10Pm</h1>
                        <h1 className="tracking-widest text-xl">Saturday - Sunday 12 Pm - 12Am</h1>
                        <div className="flex ml-20 mt-2">
                            <button className="tracking-widest border px-4 py-2">Find A Table</button>
                            </div>

                        </div>
                </div>
                </div>
               
           
            <div className="flex flex-col h-[50vh] bg-customBlack2 bg-opacity-75 mb-10 mx-8 ">
                <div className="flex flex-row my-auto ">
                    <div className="container my-auto ml-24">
                        <h1 className="text-white text-6xl tracking-widest">About Us</h1>
                    </div>
                    <div className="container w-[300vh] mr-20">
                        <p className="text-white tracking-widest text-medium">Our Aim Is To Provide A Welcoming All-Day Experience Rooted In Care For Our Customers, Staff, Produce And Land.
                            At Oxbo We Want Our Customers To Feel As Though They Are At Home. They Can Stay As Long As They Want. Relaxing All Day Or Evening - Grazing
                            On Mouth-Watering Dishes, Looked After By Our Welcoming, Attentive Staff. Customers Will Always Be Encouraged To Linger. Working On A Laptop
                            Or Reading A Paper . Even After They've Finished Their Latte Or Lunch.
                        </p>
                        <button className="text-white border text-2xl px-4 mt-4 py-2 ">Read More</button>
                    </div>
                   
                </div>
            </div>

            <div className="h-[2px] bg-customGray2 mb-10 mx-8"></div>

                   <div className="relative flex flex-col h-[180vh]  mx-10 ">
                                         <div className="flex flex-row mt-24 relative ">
                                                <div className="flex w-[561px] h-[363px] bg-customGray2 bg-opacity-75">
                                                    <div className="flex flex-row w-[561px] h-[363px] bg-customBlack2 bg-opacity-75 absolute ml-20 top-[-60px] left-[-10px]">
                                                        <img src={cafe_img} className="my-10  mx-10 " />
                                                        <div className="flex flex-col text-white -ml-8">
                                                            <img src={Cafe} className="w-[83px] h-[67px] object-contain mt-12 ml-10 " />
                                                            <p className="w-[200px] h-[50px] text-center text-sm">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                            <img src={pdf} className="object-contain w-[45px] h-[45px] mt-32 mx-auto" />
                                                        </div>

                                                    </div>
                                                </div>

                                               <div className="flex flex-col mx-auto">
                                                    <img src={h1} className="w-[465px] h-[82px] object-contain ml-28" />
                                                     <div className="flex mt-24 ">
                                                            <div className="flex w-[561px] h-[363px] bg-customGray2 bg-opacity-75 mt-20 ml-28 ">
                                                                <div className="flex flex-row w-[561px] h-[363px] bg-customBlack2 bg-opacity-75 absolute mr-28 -mt-16 right-[-46px]">
                               
                                                                    <div className="flex flex-col text-white  mx-6">
                                                                        <img src={bar_h} className="w-[89px] h-[67px] object-contain mt-14 ml-12" />
                                                                        <p className="w-[200px] h-[50px] text-center text-sm">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                            Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                                        <img src={pdf} className="object-contain w-[45px] h-[45px] mt-32 mx-auto" />
                                                                    </div>
                                                                    <img src={bar_img} className="my-10 -mx-5 " />
                                                                </div>
                                                            </div>
                                                     </div>
                                                            <div className="flex flex-row ml-20 mt-20 justify-center space-x-4">
                                                                <img src={img12} className="w-[355px] h-[241px] object-contain" />
                                                                <button className="w-[198px] h-[68px] text-white absolute border  bg-customBlack2 mt-24">Load More</button>
                                                                <img src={img13} className="w-[256px] h-[176px] mt-10 object-contain"/>
                                                            </div>
                                               </div>
                   
                                         </div>
                                              <div className="flex -mt-60">
                                                   <div className="flex w-[561px] h-[363px] bg-customGray2 bg-opacity-75  -mt-20 ">
                                                        <div className="flex flex-row w-[561px] h-[363px] bg-customBlack2 bg-opacity-75 absolute ml-20 -mt-16 left-[-10px]">
                                                            <img src={ird} className="my-10  mx-10 " />
                                                            <div className="flex flex-col text-white -ml-8">
                                                                <img src={h2} className="w-[190px] h-[45px] object-contain mt-14 -mx-1" />
                                                                <p className="w-[200px] h-[50px] text-center text-sm">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                    Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                                <img src={pdf} className="object-contain w-[45px] h-[45px] mt-32 mx-auto" />
                                                            </div>

                                                        </div>
                                                   </div>
                                              </div>
                   </div>


                                        <div className="relative flex flex-col h-[60vh] bg-customBlack2 bg-opacity-75  items-center mb-10">
                                                <h1 className="text-white text-6xl tracking-widest mt-10 ">Venue</h1>
                                            <p className="text-white tracking-widest text-xl text-center mt-4 px-6">Welcome To OXBO, Where Culinary Excellence Meets Unparalleled Hospitality. Nesteled In The Heart Of Walles,
                                                Our Restaurant Offers A Dynamic Dinning Experience That Celebrates The Fusion Of Modern And Traditional Flavours. At OXBO, We Pride Ourseleves On Sourcing
                                                The Finest Local Ingredients To Craft Innovative Dishes That Cater To A Variety Of Palates. Whether You're Indulging In Our  Signature  Creations Or Exploring
                                                Our Seasonal Specials. Each Meal Is A Journey Of Taste And Texture.Our Stylish Yet Cozy Ambiance. Complemented By Exceptional Service, Ensures That Every Visit
                                                Is Memorable. Join Us At OXBO And Savor The Art Of Fine Dining.
                                            </p>  
                                            <button className="text-white border text-2xl mt-4 py-2 px-4">Load More</button>
                                        </div>


                                 <div className=" flex  h-[400px] bg-customBlack2 mx-10  items-center mb-10">
                                           <img src={img3} className="" />

                                            <div className="conatiner mx-auto justify-center ">
                                                     <div className=" md:flex md:space-x-8 ">
                                                            <div className=" flex flex-col">
                                                                <div className="flex justify-between">
                                                                    <label className="block text-white tracking-widest  font-sm " htmlFor="fname">
                                                                       First Name
                                                                    </label>

                                                                </div>
                                                                <input
                                                                    name="name"
                                                                    onChange={changeHandler}
                                                                    value={formData.fname}
                                                                    type="text"
                                                                    id="fname"
                                                                    className="appearance-none  bg-customGray2 bg-opacity-25 text-white px-3 py-2 rounded-lg focus:outline-none"
                                                                />
                                                                

                                                            </div>
                                                        <div className=" flex flex-col">
                                                            <div className="flex justify-between">
                                                                <label className="block text-white tracking-widest font-sm " htmlFor="lname">
                                                                   Last Name
                                                                </label>

                                                            </div>
                                                            <input
                                                                name="name"
                                                                onChange={changeHandler}
                                                                value={formData.lname}
                                                                type="text"
                                                                id="lname"
                                                                className="appearance-none  text-white px-3 py-2 bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                                            />
                                                           

                                                        </div>
                                                     </div>
                                                <div className="mt-4 md:flex md:space-x-8  mx-auto">
                                                        <div className=" flex flex-col">
                                                            <label className="block text-white tracking-widest  font-sm " htmlFor="date">
                                                                DATE
                                                            </label>
                                                            <DatePicker
                                                                name="date"
                                                                selected={formData.date}
                                                                onChange={handleDateChange}
                                                                dateFormat="dd/MM/yyyy"
                                                                className="appearance-none  text-white px-3 py-2 bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                                            />
                                                        </div>
                                                        <div className="w-9/12 flex flex-col">
                                                            <label className="block text-white tracking-widest  font-sm " htmlFor="time">
                                                                TIME
                                                            </label>
                                                            <select
                                                                id="time"
                                                                value={formData.time}
                                                                name="time"
                                                                onChange={changeHandler}
                                                                className="appearance-none  text-white px-3 py-2 bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
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
                                                <div className="mt-4 md:flex md:space-x-8 mx-auto">
                                                   <div className=" flex flex-col">
                                                        <div className="flex justify-between">
                                                            <label className="block text-white tracking-widest  font-sm " htmlFor="phone">
                                                                Contact Number
                                                            </label>

                                                        </div>
                                                        <input
                                                            type="number"
                                                            id="phone"
                                                            onChange={changeHandler}
                                                            value={formData.phone}
                                                            name="phone"
                                                                className="appearance-none  text-white px-3 py-2 bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                                        />
                                                        
                                                   </div>
                                                        <div className=" flex flex-col">
                                                            <label className="block text-white tracking-widest  font-sm " htmlFor="occasion">
                                                                OCCASION
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="occasion"
                                                                name="occassion"
                                                                value={formData.occassion}
                                                                onChange={changeHandler}
                                                                className="appearance-none  text-white px-3 py-2 bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                                            />
                                                        </div>
                                                </div>
                                                        <button className="text-white tracking-widest border px-4 py-2 ml-40 mt-4">Find A Table</button>
                                                        <img src={img4} className="ml-32 w-[199px] h-[52px] mt-4" />
                                            </div>  
            </div>

            <div className=" flex flex-col h-[550px]  w-full  mb-20">
                <div className="flex mt-4  mb-16 ml-10">
                    <img src={img8} className="w-[202px] h-[70px] object-contain " />
                </div>
                       
                  <div className="flex flex-row relative space-x-20 mx-auto mb-20">
                    <div className="flex w-[350px] h-[350px] bg-customGray2 bg-opacity-75   overflow-hidden">
                        <img src={img9} className="absolute w-[350px] h-[350px] top-[50px] left-[30px] transition-transform duration-300 ease-in-out hover:transform hover:scale-110 " />
                            <h1 className="text-white text-5xl tracking-widest mt-14 ml-10 absolute">Drinks</h1>
                    </div>
                    <div className="flex w-[350px] h-[350px] bg-customGray2 bg-opacity-75 overflow-hidden ">
                        <img src={img10} className="absolute w-[350px] h-[350px] top-[50px] mx-10 transition-transform duration-300 ease-in-out hover:transform hover:scale-110 " />
                        <h1 className="text-white text-5xl tracking-widest mt-14 ml-10 absolute">Food</h1>
                    </div>
                    <div className="flex w-[350px] h-[350px] bg-customGray2 bg-opacity-75  overflow-hidden">
                        <img src={img11} className="absolute w-[350px] h-[350px] top-[50px] right-[-30px] transition-transform duration-300 ease-in-out hover:transform hover:scale-110" />
                        <h1 className="text-white text-5xl tracking-widest mt-14 ml-10 absolute">Team</h1>
                    </div>
                  </div>
            </div>
                

            <div className=" flex  h-[400px] bg-customGray2 mx-10 opacity-75 items-center mb-10">
                <div className="container mx-auto px-10 py-4">
                    <Quote />
                    </div>
            </div>
            <Suspense fallback={<h1>Loading...</h1>}>
               
            </Suspense>

            <div className=" flex  flex-row h-[400px] items-center backdrop-brightness-50 bg-white/10 ">
                <div className="flex ml-20 ">
                    <RestrauntLocation />
                </div>
                <div className="conatiner mx-auto mt-6 space-y-6">
                    <h1 className="  text-5xl tracking-widest text-white ">Connect With Us</h1>
                    <div className="flex flex-col text-white text-xl tracking-widest space-y-4">
                        <p>ADDRESS- Terminal Four, Hounslow, </p>
                        <p>TW6 3AF, United Kingdom</p>
                        <p>TEL - +44 (0) 208759 7755</p>
                        <p>EMAIL - franky.rodrigues@hilton.com</p>
                    </div>
                    <div className="container">
                        <h1 className="text-white text-2xl font-bold tracking-widest ">Follow Us</h1>
                        <div className="flex  space-x-4 mt-2 ">
                            <a href="https://www.facebook.com/yourprofile">
                                <img src={img5} />
                            </a>
                            <a href="https://www.instagram.com/yourprofile">
                                <img src={img6} />
                            </a>
                            <a href="https://twitter.com/yourprofile">
                                <img src={img7} />
                            </a>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
