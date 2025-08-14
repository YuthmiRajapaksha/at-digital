import React from "react";
import { Container, Row, Col, Navbar, Nav, Accordion } from "react-bootstrap";
import "../index.css"; 

export default function LandingPage() {
  return (
    <>
      {/* Navbar */}
    <nav className="custom-navbar">
  <div className="container">
    <a href="#">
      <img src="/Logo.png" alt="CT Digital Logo" height="40" />
    </a>
    <ul className="nav-links">
      <li><a href="#">SERVICES</a></li>
      <li><a href="#">ABOUT US</a></li>
      <li><a href="#">CONTACT US</a></li>
      <li><a href="#">CAREERS</a></li>
    </ul>
  </div>
</nav>

      {/* Hero Section */}
      <section className="hero section">
  <img
    src="/Hero Section.png"
    alt="Laptop"
    className="img-fluid w-100"
    style={{
      height: "700px",        
   
      objectFit: "cover"
    }}
  />

</section>


 
<Container className="py-5">
  
  <Row className="align-items-center mb-5">
    <Col md={6}>
      <img
        src="/image 2.png"
        alt="Web & Mobile App Development"
        className="img-fluid"
      />
    </Col>
    <Col md={6}>
      <h4 className="title">Web & Mobile App Development</h4>
      <p>
       Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks
       which tailor content and engagement methods to respond to different intents shown by your
       potential customers who interact with your business online.
      </p>
      <button className="btn custom-btn text-white">LEARN MORE</button>
    </Col>
  </Row>

 
  <Row className="align-items-center flex-md-row-reverse">
    <Col md={6}>
      <img
        src="/image 1.png"
        alt="Digital Strategy Consulting"
        className="img-fluid"
      />
    </Col>
    <Col md={6}>
      <h4 className="title">Digital Strategy Consulting</h4>
      <p>
       Your digital strategy should complement the overall marketing strategy of the company. In online
       marketing, each component will never work in isolation and every business needs a different mix. 
       We provide a clear concept and strategic overview to find the most efficient model for your business.
      </p>
      <button className="btn custom-btn text-white">LEARN MORE</button>
    </Col>
  </Row>
</Container>


<section className="bg-light py-5">
  <Container>
      <Row className="justify-content-center">
    <Col md={8}>  
    <h2 className="title text-center mb-4">
      Frequently asked questions
    </h2>
    <Accordion activeKey="0" flush>
      <Accordion.Item eventKey="0" className="custom-accordion-item active">
        <Accordion.Header className="text-primary fw-semibold custom-header">
          Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
        </Accordion.Header>
        <Accordion.Body className="text-secondary">
          Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id
          ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien
          massa morbi risus sagittis tortor integer.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="custom-accordion-item">
        <Accordion.Header className="fw-bold custom-header">
          Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
        </Accordion.Header>
        <Accordion.Body className="text-secondary">
          Curabitur at orci sed orci tincidunt tristique.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="custom-accordion-item">
        <Accordion.Header className="fw-bold custom-header">
          Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
        </Accordion.Header>
        <Accordion.Body className="text-secondary">
          Ut fermentum nisi ac dolor feugiat malesuada.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Col>
  </Row>
  </Container>
</section>

      
      {/* Footer */}
    <footer className="custom-footer text-white py-5">
  <Container>
    <Row className="align-items-start">
      
       <Col md={3}>
    <img src="/Logo.png" alt="AT Digital Logo" height="40" className="mb-3" />
    <p style={{ maxWidth: "300px" }}>
      Your goal is our target. Not anything in between. We use online
      marketing platforms and tools to achieve a single objective —
      your business results.
    </p>
  </Col>

  
  <Col md={3}></Col>

  
  <Col md={3}>
    <h6 className="fw-bold">Our Technologies</h6>
    <ul className="list-unstyled">
      <li>ReactJS</li>
      <li>Gatsby</li>
      <li>NextJS</li>
      <li>NodeJS</li>
    </ul>
  </Col>

 
  <Col md={3}>
    <h6 className="fw-bold">Our Services</h6>
    <ul className="list-unstyled">
      <li>Social Media Marketing</li>
      <li>Web & Mobile App Development</li>
      <li>Data & Analytics</li>
    </ul>
  </Col>
</Row>


   {/*Line*/ }
    <hr
  className="mt-4"
  style={{
    borderColor: "white",
    borderWidth: "2px",
    width: "80%", 
    margin: "0 auto" 
  }}
/>

   
    <p className="text-center mb-0">
      Privacy Policy &nbsp;|&nbsp; Terms & Conditions
    </p>
  </Container>
</footer>
    </>
  );
}
