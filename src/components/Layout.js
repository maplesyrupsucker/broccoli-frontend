import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './Header'

class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div>
                <Header />
                {children}
            </div>
        )
    }
}


export default Layout