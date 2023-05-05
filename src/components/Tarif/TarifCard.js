import React from "react";
import chek from '../../assets/check1.png'
import pack from '../../assets/pack50.png'
export default function TarifCard(props) {
    return(
        <div className="card">
                    <div className="card-title">
                        <h2>{props.name}</h2>
                    </div>
                    <div className="card-thumb">
                        <img src={require(`../../assets/${props.image}`)} alt={props.name} className="pack-img"/>
                    </div>
                    <div className="card-prixO">
                        <h3>{props.offre}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="card-options">
                        <div className="tarifChek-container">
                            <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span>{props.advantages1}</span></div>
                            <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span>{props.advantages2}</span></div>
                            <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span>{props.advantages3}</span></div>
                        </div>
                    </div>
        </div>
    )


}