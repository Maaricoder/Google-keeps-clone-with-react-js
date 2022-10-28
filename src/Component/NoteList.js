import React from 'react'
import { useState } from 'react';
import { MdClear } from "react-icons/md";
import {useSelector,useDispatch} from 'react-redux'
import { addtonote,deleteitems } from '../redux/Noteslice';

function NoteList() {
    const dispach =useDispatch()
    const [size, setsize] = useState(30);
    const userInput =useSelector(state=>state.note.Notes)

    console.log('userinut',userInput)

    const removeitems=(index)=>{
        dispach(deleteitems(index))
        

    }
  return (
    <div>

            { userInput.length >0 ?



             <div className=" container mx-auto grid grid-cols-5 gap-2 mt-5">
                {
                     
                    //  userInput.length > 0 ?

                    userInput.map((items,index)=>{
                        return (
                            <div   key={index} id={index} className=" relative container h-36 w-52 bg-gray-300  ">
                         <h2 className="font-semibold text-lg mt-3">{items.title}</h2>
                             {/* <h2 className='font-semibold text-lg' >{newdata[0].title}</h2> */}

                         <h1 className="break-words">{items.para}</h1>
                         <div className="btn">
                          <button onClick={()=>removeitems(index)}  className=" absolute bottom-0 right-0 ">
                          <MdClear   size={size}></MdClear>
                         </button>
                         </div>
                             </div>

                        )
                    })
                }
                 
              </div>
              :<h1 className='flex justify-center items-center font-semibold text-3xl text-center mt-10' >add some note </h1>


        }

              

        
            
      
    </div>
  )
}

export default NoteList
