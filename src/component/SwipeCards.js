import React, { useState, useEffect } from 'react';
import TinderCard  from 'react-tinder-card'
import '../style/cards.css'
import database from '../firebase/firebase'
const SwipeCards =()=>{

    const [cards, setCards] = useState([]);
    // const [cards, setCards] = useState([
    //     {
    //         name:'superman',
    //         url: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjvchamary%2Ffiles%2F2016%2F03%2Fman_of_steel-1200x800.jpg'
    //     },
    //     {
    //         name:'batman',
    //         url: 'https://www.denofgeek.com/wp-content/uploads/2014/11/dark_knight_rises_1-1.jpg?resize=620%2C432'
    //     }
    // ]);


    useEffect(() =>{

        const unsubscribe = database
        .collection('metahuman')
        .onSnapshot((snapshot) =>(
            setCards(snapshot.docs.map((doc) => doc.data()))
        ))
        return ()=>{
            unsubscribe();
        }
    }, [])


    // useEffect(() =>{
    //     database.collection('metahuman').onSnapshot(snapshot =>(
    //         setCards(snapshot.docs.map(doc => doc.data()))
    //     ))
    // }, [])


    return(
        <div >
            {/* <h1>Have a date nite with a superhero</h1> */}
            <div className='cards__container'>
            {cards.map((card)=>(
                <TinderCard className='swipe' key={card.url}>
                    <div className='card'
                        style={{backgroundImage: `url(${card.url})`}}
                        preventSwipe={['up', 'down']}
                        >
                        <h3>{card.name}</h3>
                    </div>

                </TinderCard>
            ))}
            </div>
           
        </div>
    )
}

export default SwipeCards