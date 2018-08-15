import React, { Component, Fragment } from 'react'

export class Layout extends Component {

    render() {
        return (
            <Fragment>
                <div>Toolbar, sideDrawer,backdrop</div>
                <main>
                {this.props.children}
                </main>
            </Fragment>
        )
    }
}

export default Layout
