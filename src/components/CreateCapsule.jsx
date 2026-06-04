import { useState } from "react";

const CreateCapsule = ({ addCapsule }) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [unlockDate, setUnlockDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCapsule = {
            id: Date.now(),
            title: title,
            message: message,
            unlockDate: unlockDate,
            createdDate: new Date().toISOString(),
        };

        addCapsule(newCapsule);

        setTitle("");
        setMessage("");
        setUnlockDate("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Capsule title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <input
                type="date"
                value={unlockDate}
                onChange={(e) => setUnlockDate(e.target.value)}
            />

            <button type="submit">
                Create Capsule
            </button>
        </form>
    );
};

export default CreateCapsule;