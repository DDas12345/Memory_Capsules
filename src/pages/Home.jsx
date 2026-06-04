import CreateCapsule from "../components/CreateCapsule";
import CapsuleList from "../components/CapsuleList";

const Home = ({
  capsules,
  addCapsule,
  deleteCapsule,
}) => {
  return (
    <div className="home-container">
      <h1>Memory Capsule for Future Me</h1>

      <p>
        Write a message for your future self
        and unlock it later.
      </p>

      <CreateCapsule addCapsule={addCapsule} />

      <CapsuleList
        capsules={capsules}
        deleteCapsule={deleteCapsule}
      />
    </div>
  );
};

export default Home;