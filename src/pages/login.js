import React, { Component } from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const LoginForm = styled.div`
    padding: 20px 0;
    max-width: 500px;
    display:flex;
    flex: 1;
    flex-direction: column;
    margin: auto;
`

class Login extends Component {
    render() {
        return (
            <LoginForm>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="submit" />
                <Link to='/register'>Register new account</Link>
            </LoginForm>
        )
    }
}

export default Login