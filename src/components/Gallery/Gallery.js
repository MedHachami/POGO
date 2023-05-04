import React ,{ useState } from "react";
import './Style.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/IMG4.jpg'
import IMG5 from '../../assets/IMG5.jpg'
import IMG6 from '../../assets/IMG6.jpg'
import IMG7 from '../../assets/IMG7.jpg'
import IMG8 from '../../assets/IMG8.jpg'
import IMG9 from '../../assets/IMG9.jpg'
import {FaWindowClose} from 'react-icons/fa'
export default function Gallery(){
    const data =[
        {
            id:1,
            imgSrc: IMG1
        },
        {
            id:2,
            imgSrc: IMG2
        },
        {
            id:3,
            imgSrc: IMG3
        },
        {
            id:4,
            imgSrc: IMG4
        },
        {
            id:5,
            imgSrc: IMG5
        },
        {
            id:6,
            imgSrc: IMG6
        },
        {
            id:7,
            imgSrc: IMG7
        },
        {
            id:8,
            imgSrc: IMG8
        },
        {
            id:9,
            imgSrc: IMG9
        }
    ]
    const [model,setModel] = useState(false);
    const [tempImgsrc,settempImgsrc] = useState('')
    const getImg = (imgSrc)=>{
        settempImgsrc(imgSrc)
        setModel(true)
    }
    return(
        <>
            <Navbar />
            <div className={model? "model open" : "model"}>
                <img src={tempImgsrc} />
                <FaWindowClose onClick={()=>setModel(false)} />
            </div>
            <div className="gallery">
                {
                    data.map((item,index)=>{
                        return(
                            <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                                <img src={item.imgSrc} />
                            </div>
                        )
                    })
                }
            </div>
            
            <Footer />
        </>
    )
}