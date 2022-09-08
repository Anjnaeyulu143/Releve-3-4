import React, { useState } from "react";
import HeaderBar from "./HeaderBar/HeaderBar";
import MyCard from "./MyCard/MyCard";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import cardPreset from "../utils/cardPreset";
import { generate } from "shortid";

function TrelloBoard() {
    const [cards, setCards] = useState(cardPreset);
    const [modalShow, setModalShow] = useState(false);
    const [newCard, setNewCard] = useState({
        title: "",
        desc: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setNewCard({ ...newCard, [e.target.name]: e.target.value });
    };

    const addCard = () => {
        setModalShow(true);
    };

    const handleSubmit = () => {
        if (newCard.title.length === 0 || newCard.title.length > 50) {
            setError("Title length should be 0-50 characters");
            return;
        }
        if (newCard.desc.length === 0 || newCard.title.length > 200) {
            setError("Description length should be 0-200 characters");
            return;
        }
        const newCardWithId = newCard;
        newCardWithId.cardId = generate();
        const arr = cards;
        arr.push(newCardWithId);
        setCards(arr);
        setNewCard({ title: "", desc: "" });
        setModalShow(false);
        setError("");
    };

    function deleteCard(cardId) {
        const newCardsArr = cards.filter((card) => card.cardId !== cardId);
        setCards(newCardsArr);
    }

    return (
        <div>
            <div>
                {/* Header Bar for Relevel Trello */}
                <HeaderBar addCard={addCard} />
                {/* Main Body */}
                <div>
                    {/* Modal for adding cards*/}
                    <Modal
                        size="sm"
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm">
                                Add Card
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Title </Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => handleChange(e)}
                                    name="title"
                                    value={newCard.title}
                                    placeholder="Enter Title"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description </Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => handleChange(e)}
                                    name="desc"
                                    value={newCard.desc}
                                    placeholder="Enter Description"
                                />
                            </Form.Group>
                        </Modal.Body>
                        {error.length > 0 && (
                            <Alert variant="danger">{error}</Alert>
                        )}
                        <Modal.Footer>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                {/* List of Cards to be rendered */}
                <div className="p-2">
                    {cards.map((card, index) => {
                        return (
                            <MyCard
                                title={card.title}
                                desc={card.desc}
                                cardId={card.cardId}
                                deleteCard={deleteCard}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TrelloBoard;
