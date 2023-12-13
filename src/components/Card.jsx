import React from 'react'
import {FaRegFileAlt} from 'react-icons/fa'
import {LuDownload} from 'react-icons/lu'
import {IoClose} from 'react-icons/io5'
import {motion} from 'framer-motion'

const Card = ({data,reference}) => {
  return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}}dragElastic={0.1} className='relative flex-shrink-0 w-60 h-72 z-[20] rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt/>
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.description}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between px-8 mb-5'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-5 h-5 bg-zinc-200 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose /> : <LuDownload size="0.8em" color="#000"/>}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full h-10 py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
                            <h3 className='font-semibold text-sm'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }
                
            </div>
        </motion.div>
  )
}

export default Card;