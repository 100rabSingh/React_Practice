import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.name}. My age is {person.age}. My SuperHero Name is {person.superHeroName}
            </h2>
        </div>
    )
}

export default Person
