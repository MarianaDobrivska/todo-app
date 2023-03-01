export const Modal = ({ title, description, status }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>Description:</h2>
      <p>{description}</p>
      <p>
        Status: <input type="checkbox" checked={status} readOnly />
      </p>
    </>
  );
};
