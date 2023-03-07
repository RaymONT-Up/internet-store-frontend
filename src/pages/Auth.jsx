import React from "react";
import FormLogin from "../components/FormLogin/FormLogin";
import Container from "../components/UI/Container/Container";

const Auth = () => {
  return (
    <Container
      style={{
        height: `calc(100vh - 100px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormLogin />
    </Container>
  );
};

export default Auth;
