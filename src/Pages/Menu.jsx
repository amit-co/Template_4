import imgBg from "/New/BG.png";
import cafe_img from "/New/cafe_img.png";
import Cafe from "/New/Cafe.png";
import bar_h from "/New/bar_h.png";
import kitchen_h from "/New/kitchen_h.png";
import bar_img from "/New/bar.png";
import pdf from "/New/pdf.png";
import h1 from "/New/h1.png";
import h2 from "/New/IRD_h.png";
import ird from "/New/ird.png";

export default function Menu() {
 
    return (
        <div className=" bg-fixed bg-cover pb-20" style={{ backgroundImage: `url(${imgBg})` }}>
            
                     <div className="relative flex flex-col h-auto pb-10 mx-10 mt-20  ">
                                   <img src={h1} className="object-contain mx-auto mt-10 " />
                                   <div className="flex flex-col  w-full h-auto space-y-28 mx-auto mt-20 ">
                                           <div className="flex lg:flex-row flex-col w-full space-y-20 lg:space-y-0 lg:space-x-36 lg:mx-10 ">
                                                <div className="flex lg:w-[520px] lg:h-[363px] w-[302px] h-[194px] bg-customGray2 bg-opacity-75 " >
                                                    <div className="flex flex-row lg:w-[520px] w-[302px] lg:h-[363px] h-[194px] bg-customBlack2 bg-opacity-75 absolute ml-6 lg:ml-10 top-32">
                                                        <img src={cafe_img} className="lg:w-[278px] lg:h-[270px] w-[149px] h-[146px] mx-auto my-auto"/>
                                                        <div className="flex flex-col text-white lg:mt-10">
                                                            <img src={Cafe} className=" object-contain lg:w-[83px] lg:h-[45px] w-[52px] h-[36px] mx-auto " />
                                                            <p className="lg:w-[214px] lg:h-[144px] w-[121px] h-[78px] text-center text-[8.5px] lg:text-sm lg:mt-4 lg:px-2">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                            <img src={pdf} className="object-contain lg:w-[45px] w-[24px] h-[24px] lg:h-[45px] mt-10 mx-auto" />
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className="flex lg:w-[520px] w-[302px] h-[194px] lg:h-[363px] bg-customGray2 bg-opacity-75 " >
                                                        <div className="flex flex-row lg:w-[520px] w-[302px] h-[194px] lg:h-[363px] bg-customBlack2 bg-opacity-75 absolute -ml-6 -mt-6 lg:-ml-10 lg:-mt-10">
                                                            <div className="flex flex-col text-white lg:mt-10 ">
                                                                <img src={bar_h} className="object-contain lg:w-[83px] w-[52px] h-[36px] lg:h-[45px] mx-auto " />
                                                                <p className=" text-center lg:w-[214px] w-[121px] h-[78px] lg:h-[126px] text-[8.5px] lg:text-sm lg:mt-4 lg:px-2">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                    Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                                <img src={pdf} className="object-contain  mx-auto lg:w-[45px] w-[24px] h-[24px] lg:h-[45px] mt-10 lg:mt-16" />
                                                            </div>
                                                            <img src={bar_img} className="lg:w-[278px] w-[149px] h-[146px] lg:h-[270px] mx-auto my-auto" />
                                                        </div>
                                                    </div>
                                               
                                           </div>
                    
                                                <div className="flex lg:flex-row flex-col w-full lg:space-x-36 space-y-20 lg:space-y-0 lg:mx-10 ">
                                                    <div className="flex lg:w-[520px] lg:h-[363px] w-[302px] h-[194px] bg-customGray2 bg-opacity-75">
                                                         <div className="flex flex-row lg:w-[520px] lg:h-[363px] w-[302px] h-[194px] bg-customBlack2 bg-opacity-75 absolute ml-6 -mt-6 lg:ml-10 lg:bottom-20 inset-y-2/12">
                                                            <img src={ird} className=" lg:w-[278px] lg:h-[270px] w-[149px] h-[146px] mx-auto my-auto" />
                                                            <div className="flex flex-col text-white lg:mt-10">
                                                                <img src={h2} className="object-contain lg:w-[190px] lg:h-[45px] w-[137px] h-[24px] mx-auto" />
                                                                <p className="lg:w-[214px] lg:h-[144px] w-[121px] h-[78px] text-center text-[8.5px] lg:text-sm lg:mt-4 lg:px-2">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                    Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.</p>
                                                                <img src={pdf} className="object-contain lg:w-[45px] w-[24px] h-[24px] lg:h-[45px] mt-10 mx-auto" />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                      <div className="flex lg:w-[520px] w-[302px] h-[194px] lg:h-[363px] bg-customGray2 bg-opacity-75 ">
                                                         <div className="flex flex-row lg:w-[520px] w-[302px] h-[194px] lg:h-[363px] bg-customBlack2 bg-opacity-75 absolute -ml-6 -mt-6 lg:-ml-10 :bottom-20">
                                                            <div className="flex flex-col text-white md:mt-10">
                                                                <img src={kitchen_h} className=" object-contain lg:w-[230px] w-[137px] h-[24px]  lg:h-[52px] mx-auto" />
                                                                <p className="text-center lg:w-[214px] w-[121px] h-[78px] lg:h-[126px] text-[8.5px] lg:text-sm lg:mt-2 lg:px-2">Tempting Snacks For Any Time Of Day - Or Take Advantage Of The Grab And Go Service If You Need Something To Eat Or Drink On The Move.
                                                                    Choose From Breakfast Favorites. Healthy Offerings Or Traditional Favorites Cooked With Resposibly Sourced Ingredients.
                                                                </p>
                                                                  <img src={pdf} className="object-contain mx-auto lg:w-[45px] w-[24px] h-[24px] lg:h-[45px] mt-10 lg:mt-14" />
                                                            </div>
                                                               <img src={bar_img} className="lg:w-[258px] w-[149px] h-[146px] lg:h-[250px] mx-auto my-auto" />
                                                         </div>
                                                      </div>
                                           </div>
                        
                                   </div>
                     </div>
                                 <button className="sm:hidden border text-white px-8 text-xl py-2 ml-28">Find A Table</button>
        </div>
    );
}
