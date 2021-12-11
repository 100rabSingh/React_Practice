import React from 'react'

function MemoComp({ name }) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)      //what we see here is something called higher order Comp, React.memo accepts a component ->
                                        //adds somethings to that component -> return a new enhanced Component.


//Memo to Functional Component is same as the Pure Component is to the Class Component.
//to implement is write 'React.memo(Pass the component)'
