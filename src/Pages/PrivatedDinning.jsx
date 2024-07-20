import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import { toast } from "react-toastify";
import { z } from "zod";
import imgBg from "/New/BG.png";


export default function PrivateDinning() {
  
                  const schema = z.object({
                    fname: z
                      .string()
                      .min(1, "First name is required")
                          .max(50, "First name must be at most 50 characters"),
                      lname: z
                          .string()
                          .min(1, "Last name is required")
                          .max(50, "Last name must be at most 50 characters"),
                   
                  });

                  const initialFormData = {
                    date: new Date(),
                    time: "16:00",
                    fname: "",
                    lname: "",
                    tag : "PD"
                  }
                  const [formData, setFormData] = useState(initialFormData);

                  const[errors,setErrors] = useState({})
                  console.log(errors)
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

  function formHandler(){
                  try{
                    schema.parse(formData)
                    axios({
                    method : "post",
                    url : `${config.url}/messages`,
                    data : formData
                })
                    .then((res)=>{
                      toast.success('Message sent', {
                        position: "top-center",
                        autoClose: 1998,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });
                        setFormData(initialFormData)
        
                    })
                    .catch((e)=>{
                        console.log(e)
                    })
                  }catch (error) {
                        if (error instanceof z.ZodError) {
                          const errorMessages = error.errors.reduce((acc, curr) => {
                            acc[curr.path[0]] = curr.message;
                            return acc;
                          }, {});
                          setErrors(errorMessages);
                        }
                  }
    
  }

    return (
        <div className="bg-fixed bg-cover sm:pb-6 pb-4" style={{ backgroundImage: `url(${imgBg})` }}>
                      

               <div className="flex flex-col  pt-10">
                      <h1 className="md:text-4xl text-2xl tracking-widest text-customWhite text-center font-bold mt-32">
                          PRIVATE DINING
                      </h1>
                      <p className="md:w-8/12 w-9/12  mx-auto text-center tracking-widest text-base md:text-xl text-customWhite mt-5">
                         Discover the perfect blend of comfort and sophistication in our
                         thoughtfully designed space, where every detail is crafted to enhance
                         your dining experience. From intimate dinners to lively gatherings, OXBO
                         is the ideal setting for any occasion.
                      </p>
                                          
            
          
                <div className="flex w-full sm:ml-[25%] mt-8 ">
                    <form className="md:w-10/12 mx-auto sm:mx-0">
                                 <div className=" md:flex ">
                   
                                        <div className="md:w-4/12 flex flex-col">
                                             <div className="flex justify-between">
                                                <label className="block text-customWhite tracking-widest text-lg font-medium " >
                                                   First Name
                                                </label>
                                             </div>
                                              <input
                                                name="fname"
                                                onChange={changeHandler}
                                                value={formData.fname}
                                                type="text"
                                                id="fname"
                                                className="appearance-none sm:w-8/12 h-14 text-white px-4  bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                              />
                                              {errors.fname && <h1 className="text-red-500 text-sm">{errors.fname}</h1>}
          
                                        </div>
                                        <div className="md:w-4/12 flex flex-col">
                                                <div className="flex justify-between">
                                                    <label className="block text-customWhite tracking-widest text-lg font-medium ">
                                                      Last Name
                                                    </label>

                                                </div>
                                                <input
                                                    name="lname"
                                                    onChange={changeHandler}
                                                    value={formData.lname}
                                                    type="text"
                                                    id="lname"
                                                    className="appearance-none sm:w-8/12 h-14 text-white px-3  bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                                />
                                                {errors.lname && <h1 className="text-red-500 text-sm">{errors.lname}</h1>}

                                        </div>
                      
                                 </div> 
                   
                                 <div className=" md:flex mt-8">
                                                <div className="md:w-4/12 flex flex-col">
                                                  <label className="block text-customWhite tracking-widest text-lg font-medium " >
                                                    DATE
                                                  </label>
                                                  <DatePicker
                                                    name="date"
                                                    selected={formData.date}
                                                    onChange={handleDateChange}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="appearance-none sm:w-8/12 h-16 text-white px-3  bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
                                                  />
                                                </div>
                                           <div className="md:w-4/12 flex flex-col">
                                                      <label className="block text-customWhite tracking-widest text-lg font-medium ">
                                                        TIME
                                                      </label>
                                                      <select
                                                        id="time"
                                                        value={formData.time}
                                                        name="time"
                                                        onChange={changeHandler}
                                                        className="appearance-none sm:w-8/12 h-16 text-white px-3  bg-customGray2 bg-opacity-25 rounded-lg focus:outline-none"
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
                                                              <option key={time} value={time}>
                                                                   {new Date(`1970-01-01T${time}Z`).toLocaleTimeString([], {
                                                                        hour: "2-digit",
                                                                        minute: "2-digit",
                                                                   })}
                                                              </option>
                                                        ))}
                                                  </select>
                            </div>
                                           
                        </div>

                    <div className="flex ">
                                           <button onClick={formHandler} className="border border-customWhite mt-12 sm:ml-52 bg-clip-text px-12 py-4 text-lg md:text-xl text-white ">
                                                   Find A Table
                                           </button>
                        </div>
                                        </form>
                          </div>
              </div>
          
        </div>
          
  );
}
