import React, { useState } from "react";
import { Button } from 'react-bootstrap'
import ModalPop from "./components/ModalPop";

function App() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }

    return (
        < >
            <Button onClick={() => setShow(true)}>Show Popup</Button>
            {
                show ?
                    <ModalPop handleClose={handleClose} />
                    : null
            }

        </>
    );
}

export default App;
