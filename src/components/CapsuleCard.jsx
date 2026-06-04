const CapsuleCard = ({
    capsule,
    deleteCapsule,
}) => {
    const isUnlocked =
        new Date() >=
        new Date(capsule.unlockDate);

    return (
        <div className="capsule-card">
            <h3>{capsule.title}</h3>

            {isUnlocked ? (
                <>
                    <p>{capsule.message}</p>

                    <p className="status unlocked">
                        🔓 Unlocked
                    </p>
                </>
            ) : (
                <p className="status locked">
                    🔒 This capsule is still
                    locked
                </p>
            )}

            <p>
                Unlock Date:{" "}
                {new Date(
                    capsule.unlockDate
                ).toLocaleDateString()}
            </p>

            <p>
                Created Date:{" "}
                {new Date(
                    capsule.createdDate
                ).toLocaleDateString()}
            </p>

            <button
                onClick={() =>
                    deleteCapsule(capsule.id)
                }
            >
                Delete
            </button>
        </div>
    );
};

export default CapsuleCard;