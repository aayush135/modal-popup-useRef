import React, { useEffect, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalPop = (props) => {
    //create ref using ureRef hook
    const inputRef = useRef(null)

    //log created ref in console
    useEffect(() => {
        console.log('Modal input ref', inputRef)
    }, [inputRef]);

    return (
        <Modal show={true} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal Popup using UreRef() hook in ModalPop</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                Inspect console to see logged ref.


                {/* input field with ref */}
                <input ref={inputRef} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPop
