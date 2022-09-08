import React, { useState } from "react";
import "./MyCard.css";
import { Button, Card, Modal } from "react-bootstrap";

const MyCard = ({ title, desc, cardId, deleteCard }) => {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }
    function handleDelete() {
        deleteCard(cardId);
        setShow(false);
    }
    return (
        <Card style={{ width: "18rem" }} className="newCardBG p-2 m-2">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure to delete?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Button variant="danger" onClick={() => setShow(true)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default MyCard;
