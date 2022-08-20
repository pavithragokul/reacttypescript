import React from 'react';
import { Name } from './person.type';
type PersonListPropsReal = {
    name :Name[]
}
export const PersonListProps = (props: PersonListPropsReal)=>{
    return (
        <div>
            {props.name.map(name => {
                return ( <h2 key={name.fname}>{name.fname} {name.lname}</h2>);
            })}
        </div>
    );
}