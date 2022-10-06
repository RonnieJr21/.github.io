import React from "react";
import {useParams} from "react-router-dom";
import PlaceList from "../Components/PlaceList";
const Dummy_Places=[
    {
        id: 'p1',
        title:'New York',
        description: 'The big apple',
        imageUrl: 'https://cdn.britannica.com/70/20070-050-C2E2045C/Central-Park-Manhattan-New-York-City-apartment.jpg',
        address: '123 main street NY ',
        location: {
            lat: 10.5,
            lon: 11.0
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title:'New York',
        description: 'The big apple',
        imageUrl: 'https://cdn.britannica.com/70/20070-050-C2E2045C/Central-Park-Manhattan-New-York-City-apartment.jpg',
        address: '123 main street NY ',
        location: {
            lat: 10.5,
            lon: 11.0
        },
        creator: 'u2'

    }
]
const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = Dummy_Places.filter(place => place.creator === userId);

    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces