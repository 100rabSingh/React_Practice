//List Rendering Using Map Method
// NameList.js File is responsible for rendering the list and Person.js is responsible for rendering persons 

import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Tony Stark',
            age: 42,
            superHeroName: 'Iron Man'
        },
        {
            id: 2,
            name: 'Steve Roger',
            age: 106,
            superHeroName: 'Captain America'
        },
        {
            id: 1,
            name: 'Natasha Roman',
            age: 30,
            superHeroName: 'Black Widow'
        }

    ]
    const personList = persons.map(person => <Person person = {person} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
