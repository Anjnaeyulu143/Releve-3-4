import { generate } from "shortid";

const cardPreset = [
    {
        title: "Ticket 1",
        desc: "This is the description for ticket no.1",
        cardId: generate(),
    },
    {
        title: "Ticket 2",
        desc: "This is the description for ticket no.2",
        cardId: generate(),
    },
    {
        title: "Ticket 3",
        desc: "This is the description for ticket no.3",
        cardId: generate(),
    },
    {
        title: "Ticket 4",
        desc: "This is the description for ticket no.4",
        cardId: generate(),
    },
    {
        title: "Ticket 5",
        desc: "This is the description for ticket no.5",
        cardId: generate(),
    },
];

export default cardPreset;
