import React from "react";
import chek from '../../assets/check1.png'
import pack50 from '../../assets/pack50.png'
import pack100 from '../../assets/pack100.png'
import pack200 from '../../assets/pack200.png'
export default function TarifCard(props) {
    console.log(props);
    return(
        
        <div className="card">
                    <div className="card-title">
                        <h2>{props.packageName}</h2>
                    </div>
                    {/* <div className="card-thumb">
                        <img src={require(`../../assets/${props.image}`)} alt={props.name} className="pack-img"/>
                    </div> */}
                    <div className="card-prixO">
                        <h3>{props.creditsOffer - props.packageName.split(" ")[2]} DH offerts</h3>
                        <p>Pour chaque {props.packageName.split(" ")[2]} DH rechargés, vous bénéficiez de <span style={{color:'#0d1721'}}>{props.creditsOffer} DH </span> de solde</p>
                    </div>
                    <div className="card-options">
                        <div className="tarifChek-container">
                            <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span>Le solde est valable 15 jours après l’achat du pack</span></div>
                            <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span>Protection 100 du conducteur et du passager</span></div>
                            <div className="tarif-Chek"><img src={chek} style={{width:'25px'}} /><span>Assurance Responsabilité Civile</span></div>
                        </div>
                    </div>
        </div>
    )


}