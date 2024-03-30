import { useRouteError } from "react-router-dom";

const Error = () => {
  
  const { status, statusText } = useRouteError();

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <img src="https://ik.imagekit.io/jkay012024/Screenshot%202024-03-23%20162720.png?updatedAt=1711191499531" alt="Error message" className="max-w-full max-h-full"/>
      </div>
      </>
  );
};

export default Error;