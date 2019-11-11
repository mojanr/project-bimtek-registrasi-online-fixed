import React from 'react'
import { Switch } from "react-router-dom"
import RouterSubRouteComponent from './router-sub-route.component'

const RouterConfigComponent = ({ routes, children }) => {
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouterSubRouteComponent key={i} {...route} />
            ))}
            {children}
        </Switch>
    )
}

export default React.memo(RouterConfigComponent)
