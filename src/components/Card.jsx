import React from 'react'
// import zaferesImg from '../img/katie-zaferes.png'
import starIcon from '../img/star.png'

export default function Card(props){
    const person = props.props
    console.log(person)

    let digitText
    if(person.openSpots == 0){
        digitText = 'SOLD OUT'
    }
    else if(person.location == 'Online'){
        digitText = 'Online'
    }
    return (
        <div className="card">
            {digitText && <p className='card-online'>{digitText}</p>}
            <img src={`./img/${person.coverImg}`} alt='zaferes image' className='card-logo'/>
            <div className='card-footer'>
                <div>
                    <img src={starIcon} alt="star icon" />
                    <p>{person.stats.rating}({person.stats.reviewCount}).</p>
                    <span>USA</span>
                </div>
                <p>{person.title}</p>
                <p><b>From ${person.price}</b>/ person</p>
            </div>
        </div>
    )
}