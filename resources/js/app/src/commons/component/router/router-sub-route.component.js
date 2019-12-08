import React from 'react'
import { Route, useLocation, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/_store.module'

const RouterSubRouteComponent = (route) => {

    const store = useStore()
    const location = useLocation()

    const loginValidation = (guard) => {
        console.log('guard', guard)
        if (guard) {
            if (store.authStore.islogin()) {
                // console.log('is login', true)
                return true
            } else {
                // console.log('is login', false)
                return false
            }
        } else {
            // console.log('no guard', true)
            return true
        }
    }


    const routesRender = (props, route) => {
        // console.log(route.path)
        // console.log(location.pathname)
        // console.log(store.authStore.getToken())
        if (route.path == location.pathname) {
            if (loginValidation(route.guard)) {
                return (<route.component {...props} routes={route.routes} />)
            } else {
                return ((<Redirect to="/auth/login" />))
            }
        } else {
            return (<route.component {...props} routes={route.routes} />)
        }
    }

    return (
        // <Route
        //     path={route.path}
        //     render={props => (
        //         // pass the sub-routes down to keep nesting
        //         <route.component {...props} routes={route.routes} />
        //     )}
        // />
        <Route
            path={route.path}
            render={props => routesRender(props, route)}
        />
    )
}

export default React.memo(observer(RouterSubRouteComponent))
