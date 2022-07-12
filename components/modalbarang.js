import { Modal, Button } from 'react-bootstrap'
import React, { useState, Component, useRef } from "react"

class ModalBarang extends React.Component {

    constructor(props) {
        super(props)
        this.imageRef = React.createRef()
        this.state = {
            show: true,
            change: true
        }
    } 
    componentDidMount() {
        console.log('asddas' + this.imageRef)
    }
    closeModal = () => {
        this.setState({ show: false })
        console.log(this.state.show)
    };
    render() {
        return (<>
            <Modal
                show={this.state.show}
                onClick={this.closeModal}
                onHide={this.closeModal}
                dialogClassName="modal-290w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>

                    </p>
                </Modal.Body>
            </Modal>
        </>)
    }
}

export default ModalBarang