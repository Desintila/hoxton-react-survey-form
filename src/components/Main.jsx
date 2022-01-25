import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Main() {
    const [open, setOpen] = useState(false); //Ignore this state
    const [answersList, setAnswersList] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const bestFeatures = [...event.target.bestFeatures]
            .filter(input => input.checked)
            .map(input => input.value)
        const worstFeatures = [...event.target.worstFeatures]
            .filter(input => input.checked)
            .map(input => input.value)
        const timeSpent = [...event.target.timeSpent]
            .filter(input => input.checked)
            .map(input => input.value)
        const data = {
            review: event.target.review.value,
            email: event.target.email.value,
            username: event.target.username.value,
            consistency: event.target.consistency.value,
            colour: event.target.colour.value,
            logo: event.target.logo.value,
            bestFeatures: bestFeatures,
            worstFeatures: worstFeatures,
            timeSpent: timeSpent
        }

        const update = [...answersList]
        update.push(data)
        setAnswersList(update)
        event.target.reset()
    }

    return (
        <main className="main">
            <section className={`main__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                <AnswersList answersList={answersList} />
            </section>
            <section className="main__form">
                <Form handleSubmit={handleSubmit} />
            </section>
        </main>
    );
}

export default Main;