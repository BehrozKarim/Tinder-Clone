import React, {useEffect, useState} from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card"
// import { SwipeableDrawer } from '@mui/material';
import axios from './axios';
function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect (() => {
        async function fetchData() {
            const req = await axios.get('/tinder/card');

            setPeople(req.data);
        }

        fetchData();
    }, []);
    //     [
    //     {
    //         name: 'Behroz',
    //         url: "https://scontent.flhe2-3.fna.fbcdn.net/v/t39.30808-6/279918069_1120723268495806_9071708819657995694_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeHxXsSLvsp71JBhFj-4XN4hEFAF3wFo8HcQUAXfAWjwd5_QIYfSiVq-f4U05uxOa8wz0NolCpJdDPxweZlNSaEv&_nc_ohc=WuZ8WpQSlOMAX-96lsN&_nc_zt=23&_nc_ht=scontent.flhe2-3.fna&oh=00_AT-0zZfo6-_KKqXhmiyuSYJ5GxvK13GzgGsO1TTlZdS1zg&oe=62850F8F",
    //     },

    //     {
    //         name: 'Elon Musk',
    //         url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
    //     },
    // ]

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };

    return (
    <div className = "tinderCards">
        <div className = "tinderCards_cardContainer">
            {people.map((person) => (
                <TinderCard
                    className = "swipe"
                    key = {person.name}
                    preventSwipe = {["up", "down"]}
                    onSwipe = {(dir) => swiped(dir, person.name)}
                    onCardLeftScreen = {() => outOfFrame(person.name)}

                >
                    <div
                        style = {{backgroundImage: `url(${person.imgUrl})`}}
                        className = "card"
                        >
                            <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
    )
}

export default TinderCards