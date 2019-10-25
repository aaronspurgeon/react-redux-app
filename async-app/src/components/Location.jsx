import React from 'react';
import LocationList from './LocationList';

export default function Location(props) {
    return (
        <div>
            {props.searchResults.map((item, index) => (
                // <LocationList item={item} key={index} />
                console.log(item)
            ))}
        </div>
    )
}