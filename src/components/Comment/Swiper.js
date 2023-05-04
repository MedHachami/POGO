import React from "react";
import * as ReactDOMServer from "react-dom/server";
// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Pagination } from "swiper";

import localise from '../../assets/localise.jpg'
import scan from '../../assets/scan.jpg'
import roule from '../../assets/roule.jpg'
import { Bs1Circle,Bs2Circle,Bs3Circle } from 'react-icons/bs';
import cadre from '../../assets/cadre.png'
// Import Swiper styles
import 'swiper/swiper-bundle.css'
SwiperCore.use([Pagination]);
export default () => {
    const [activeIndex, setactiveIndex,] = React.useState(0);
    const FirstStep = () =>{
        return(
            <>
                <h1><Bs1Circle /> LOCALISE</h1>
                <p>Télécharge notre application et repère le parking POGO le plus proche.</p>
            </>
        )
    }
    const SecondStep = () =>{
        return(
            <>
                <h1><Bs2Circle className="icon" /> SCAN</h1>
                <p>Scan le code QR sur le véhicule pour le déverrouiller.</p>
            </>
        )
    }
    const ThirdtStep = () =>{
        return(
            <>
                <h1><Bs3Circle /> ROULE</h1>
                <p>Roulez où vous souhaitez dans <span> le périmètre urbain </span> renseigné sur l’application tout en respectant le code de la route. Veuillez revenir au <span> parking POGO </span> pour terminer votre location.</p>
            </>
        )
    }
    
  return (
    
        <div className="how-Steps-Container">
                
                <div className="how-Step">
                    <div className="cadre"><img src={cadre} style={{width:'100%'}}   /></div>
                    <Swiper
                        pagination={{ clickable: true }}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={(swiper) => setactiveIndex(swiper.activeIndex)}
                        onSwiper={(swiper) => {
                            // console.log(swiper);
                        }}
                        
                        onActiveIndexChange={(swiper) => {
                            
                        }}
                    >
                        <SwiperSlide style={{width:'350px'}}><img src={localise} className="imgSlide"  /></SwiperSlide>
                        <SwiperSlide style={{width:'350px'}}><img src={scan} className="imgSlide"  /></SwiperSlide>
                        <SwiperSlide style={{width:'350px'}}><img src={roule} className="imgSlide"  /></SwiperSlide>

                    </Swiper>
                </div>
                <div className="how-Step">
                   {activeIndex === 0 &&  <FirstStep /> }
                   {activeIndex === 1 && <SecondStep /> }
                   {activeIndex === 2 && <ThirdtStep />}
                </div> 
                  
                
        </div>
            
   
  );
};