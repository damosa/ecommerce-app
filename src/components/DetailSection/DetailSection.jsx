import React from 'react'
import { Row } from 'reactstrap'

const DetailSection = ({ children }) => {
    return (
        <div className="mb-5">
            <Row>
                {children}
            </Row>
        </div>
    )
}

export default DetailSection