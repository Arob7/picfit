import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/userSelectors";

import signupImage from "../../assets/img/brownwalkin.jpg";

import SignUpCard from "../../components/SignUpCard/SignUpCard";
import { Container, Row, Col } from "react-bootstrap";

const SignUpPage = ({ currentUser }) => {
  const history = useHistory();
  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser, history]);
  return (
    <Container>
      <Row>
        <Col md={6}>
          <main
            style={{
              backgroundImage: `url(${signupImage})`,
              width: "100%",
              height: "650px",
            }}
            className="sign-up-page"
          >
            <SignUpCard />
          </main>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SignUpPage);
