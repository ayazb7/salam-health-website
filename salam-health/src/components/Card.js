import React from "react";
import CardImage from '../images/CardImage.png';
import arrow_right from '../images/chevron-right.png';

export default function Card(props){
    const handleButtonClick = () =>{
        // do nothing fo now
        console.log("pressed book button");
    }
    const learnMoreClick = () =>{
        console.log("clicked learn more")
    }


    return(
        <div className="treatment-card">
            <img src={props.image} alt='treatment image'/>

            <div className="treatment-text">
                <p className="treatment-name" style={{ textAlign: 'start', fontWeight: '700' }}>{props.title}</p>
                <p className="treatment-info" style={{ textAlign: 'start' }}>{props.description}</p>

                <p className="treatment-info" style={{ textAlign: 'start', marginBottom: '0', fontWeight: '700' }}>£{props.price}</p>
                <p className="treatment-info" style={{ textAlign: 'start', marginTop: '0', marginBottom: '0' }}>{props.duration}</p>
            </div>
            
            <div className="horizontal" style={{ justifyContent: 'space-between' }}>
                <button className="book-now dark-blue" style={{ width: '10vw' }} onClick={handleButtonClick}>
                    Book
                </button>

                <div className='learn-more' style={{ gap: '5px'}}>
                    <p style={{ fontWeight: '600', fontSize: '16px' }}>Learn More</p>
                    <div className='circle' style={{ width: '30px', height: '30px' }}>
                        <img src={arrow_right} style={{ width: '25px', height: '25px' }}/>
                    </div>
                </div>
            </div>
        </div>

            // <div className="booking-cards">
            //     <img className="card-img" src={CardImage} alt="the card therapy image" />
            //     <h3 className="card-title">{props.title}</h3>
            //     <p className="card-description">{props.description}</p>
            //     <p className="card-price">£ {props.price}</p>
            //     <p className="card-duration">{props.duration}</p>
            //     <div className="booking-info-card">
            //         <button className="book-now-card" onClick={handleButtonClick}>
            //                     Book Now
            //         </button>
            //         <p className="card-info" onClick={learnMoreClick}>Learn more</p>
            //         <span className="info-img-card"><img  onClick={learnMoreClick} src={arrow_circle} alt="arrow for info" /></span>
            //     </div>
            // </div>
    )
}
