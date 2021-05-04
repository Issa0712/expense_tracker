

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
    <h1>this info:{props.info}</h1>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin &&   <p>Private info please dont share</p>}
        <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isLoggedIn ? <p>User Logged IN access granted</p> && <WrappedComponent {...props} />  : <p>Please Login to view info</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const IsAuthenticated = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo info="is private" isAdmin={true}/>, document.getElementById('root'))
ReactDOM.render(<IsAuthenticated info="is private but now visible" isLoggedIn={true}/>, document.getElementById('root'))