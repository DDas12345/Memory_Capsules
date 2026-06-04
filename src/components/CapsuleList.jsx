import CapsuleCard from "./CapsuleCard";

const CapsuleList = ({
    capsules,
    deleteCapsule,
}) => {
    return (
        <div className="capsule-list">
            {capsules.length === 0 ? (
                <p>
                    No capsules yet. Create your first
                    capsule!
                </p>
            ) : (
                capsules.map((capsule) => (
                    <CapsuleCard
                        key={capsule.id}
                        capsule={capsule}
                        deleteCapsule={deleteCapsule}
                    />
                ))
            )}
        </div>
    );
};

export default CapsuleList;