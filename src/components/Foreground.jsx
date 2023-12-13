import React,{useRef} from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi voluptatibus totam ducimus.",
            fileSize: "2.1mb",
            close: true,
            tag:{
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi voluptatibus totam ducimus.",
            fileSize: ".9mb",
            close: true,
            tag:{
                isOpen: true,
                tagTitle: "Upload Now",
                tagColor: "blue"
            }
        },
        {
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi voluptatibus totam ducimus.",
            fileSize: "1.7mb",
            close: false,
            tag:{
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
    ];
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[100] w-full h-full flex gap-10'>
            {data.map((item,index)=>(
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground