import React from 'react';
import { PersonProps } from './person.type';

export const Person = (props: PersonProps) => {
    return (
        <div>
           {props.name.fname} {props.name.lname}
        </div>
    );
}
