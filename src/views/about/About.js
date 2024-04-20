import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-2">ABOUT ME</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded tex align-text-left " >
                <br />•	Frontend Developer with 4 years of professional experiences in Web development using Web Technologies.
                <br />
                <br/>
                •	Strong developing experience with HTML, CSS, JavaScript, React js, React Hooks, Redux and Next js. Knowledgeable in web standards and responsive design.
                <br />
                <br />
                •	Good debugging and problem-solving skills. Confidence to drive assignments to completion.
                <br />
                <br />
                •	Staying up-to-date with web development trends and technologies: This involves continuously learning new skills, tools, and techniques to stay current with the rapidly changing field of web development. 
                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> 
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://docs.google.com/document/d/1e25LlMhkTPj4BwkhXXKHvZsziwsUDaTgU4gPsIHzKIY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  {/* <div>
                    <a href="https://medium.com/@anil" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-secondary">
                        Medium
                      </Button>
                    </a>
                  </div> */}
                  <div>
                    <a href="https://github.com/anilvin" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/anil-singh-8a9b792b8" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;