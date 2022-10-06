import React from 'react';
import UsersList from "../Components/pieces/UsersList";


const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ronnie',
            image: 'https://www.xtrafondos.com/wallpapers/vertical/astronaura-rodeado-de-aros-9260.jpg',
            places: '3'
        }
    ];


    return(
        <UsersList items={USERS}/>
    )
}
export default Users