import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

import { getUsers } from '../data/users/actions'
import { getUserList } from '../data/users/selectors'

const RecipientContainer = styled('div')`
`
const Recipient = styled('div')`
    display: flex;
    flex-direction: row;
    flex: 1;
`

class DashboardPage extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        const { getUsers } = this.props
        getUsers()
    }


    render() {
        const { users } = this.props
        return (
            <div>
                <h2>Recipients</h2>
                <RecipientContainer>
                    {Object.keys(users).map((item, index) => {
                        if (item === 'content' || item === 'id') return null
                        return (
                            <Recipient key={users[item].last_name + index}>
                                <div>Name: {users[item].first_name}, {users[item].last_name}</div>
                                <div>Amount: ${users[item].amount_usd.toFixed(2)}</div>
                                <div>Address: {users[item].address}</div>

                            </Recipient>
                        )
                    })}
                </RecipientContainer>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const users = getUserList(state)
    return {
        users
    }
}

const mapDispatchToProps = {
    getUsers
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)