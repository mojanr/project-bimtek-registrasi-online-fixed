import React, { useEffect } from 'react'
import { Switch, Redirect, useLocation } from "react-router-dom"
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/_store.module'
import RouterSubRouteComponent from './router-sub-route.component'

const RouterConfigComponent = ({ routes, children }) => {

    // const store = useStore()
    // const location = useLocation()

    // useEffect(() => {
    //     console.log(location)
    // })

    // const loginValidation = (guard) => {
    //     console.log('guard', guard)
    //     if (guard) {
    //         if (store.authStore.islogin) {
    //             console.log('is login', true)
    //             return true
    //         } else {
    //             console.log('is login', false)
    //             return false
    //         }
    //     } else {
    //         console.log('no guard', true)
    //         return true
    //     }
    // }


    // const routesRender = (routes) => {
    //     routes.map((route, i) => {
    //         if (loginValidation(route.guard)) {
    //             return <RouterSubRouteComponent key={i} {...route} />
    //         } else {
    //             return ((<Redirect to="/auth/login" />))
    //         }
    //     })
    // }

    return (
        <Switch>
            {/* {routesRender(routes)} */}
            {
                routes.map((route, i) => (
                    // <React.Fragment key={i}>
                        // {/* {console.log(route)} */}
                        <RouterSubRouteComponent key={i} {...route} />
                    // </React.Fragment>
                ))
                // (<Redirect to="/auth/login" />)
            }
            {/* {routes.map((route, i) => (
                <RouterSubRouteComponent key={i} {...route} />
            ))}
            {children} */}
        </Switch>
    )
}

export default React.memo(observer(RouterConfigComponent))
