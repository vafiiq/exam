import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Context from "../Context/Context";

const Admin = () => {
  const callback = useContext(Context);
  const { login, SetActiveLink } = callback;
  SetActiveLink("admin");

  return (
    <>
      {login ? (
        <>
          <h1 className="p-5 fst-italic text-decoration-line-through text-muted m-5">Hello brotha! </h1>
        </>
      ) : (
        <>
          <Navigate to={"/"}></Navigate>
        </>
      )}
    </>
  );
};

export default Admin;
