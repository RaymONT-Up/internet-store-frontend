import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import Container from "../../components/UI/Container/Container";

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
      <AuthForm />
    </Container>
  );
};

export default Auth;
