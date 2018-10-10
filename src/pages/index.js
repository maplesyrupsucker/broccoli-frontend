import React, { Component } from 'react'
import styled from 'styled-components'

import { Grid, Col, Row } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <code>{'<Col xs={12} md={8} />'};</code>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>{'<Col xs={6} md={4} />'}</code>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <code>{'<Col xs={6} md={4} />'}</code>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>{'<Col xs={6} md={4} />'}</code>
                    </Col>
                    <Col xsHidden md={4}>
                        <code>{'<Col xsHidden md={4} />'}</code>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6} xsOffset={6}>
                        <code>{'<Col xs={6} xsOffset={6} />'}</code>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col md={6} mdPush={6}>
                        <code>{'<Col md={6} mdPush={6} />'}</code>
                    </Col>
                    <Col md={6} mdPull={6}>
                        <code>{'<Col md={6} mdPull={6} />'}</code>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Home