import React from 'react'
import { useState } from 'react';
import { MdControlPoint } from "react-icons/md";
import {useSelector,useDispatch} from 'react-redux'
// import Noteslice from '../redux/Noteslice';
import { addtonote } from '../redux/Noteslice';

function Home() {

    const dispach = useDispatch();

    const [iconSize, seticonSize] = useState(2);
    const [inputnote,setInputnote]= useState({
        title:'',
        para:''


    });

    
    const inputevent=(e)=>{
        

        const {name,value}=e.target

        setInputnote(old=>{
            return {
                ...old,
                [name]:value
            }
        })

        console.log(inputnote)
        // seticonSize(4)

        
    }

    const iconsfunction=()=>{
        seticonSize(4)
    }

    const addtoredux=()=>{
        
        if(inputnote.title && inputnote.para){

          dispach(addtonote(inputnote))

          setInputnote({
            title:'',
            para:''
         })
        }else{
            alert('oh come on write some text m')
        }

        
    }

    
   
  return (
    <div>
       <div className=' mt-4' >

      
                <input onClick={iconsfunction} onChange={inputevent} value={inputnote.title} name='title'  type="text" id="search-navbar" class="block p-2 pl-10 mx-auto w-1/4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title..."/>
                <textarea   placeholder='Write some note' name='para' onChange={inputevent} value={inputnote.para} className=' rounded-md bg-gray-400 w-1/4 mx-auto pl-10 '  id="size" cols="30" rows={iconSize}>enter some text</textarea>
                <div className="btn  "><button  onClick={addtoredux}   type='submit' ><MdControlPoint size={40}></MdControlPoint></button></div>




    </div> 

      
    </div>
  )
}

export default Home
