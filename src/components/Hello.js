import React, { createElement } from 'react';

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello 100rab</h1>
    //     </div>
    // )
    //Printing string using proper react not JSX
    return React.createElement('div', { id: 'hello', className: 'dummyClass' }, React.createElement('h1', null, 'Hello 100rab'))
}

export default Hello;
