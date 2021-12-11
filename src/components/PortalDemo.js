import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>
            Portals Demo
        </h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo


//For Portal Usecase and Portal Event Bubbling use reference example from Codepen.io
