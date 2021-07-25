import React  from "react";
import { Container } from "react-bootstrap";

export default function SalesCenteredContainer({children}) {
  return (
    <>
      <Container
        className="d-flex align-items-top justify-content-center"
        style={{ minHeight: "100vh" }}
      >

        <div className="w-100" style={{ maxWidth: "100%" }}>
            {children}
        </div>
      </Container>
    </>
  );
}
