import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { img, serviceName, Description, Price, _id } = props.service;
  const bgColor = [
    "#FF5733",
    "#fcb418",
    "#9abb08",
    "#126b4f",
    "#337AFF",
    "#FF5133",
    "#B833FF",
    "#0F9C6F",
    "#9C0F42",
  ];

  const num=Math.round(Math.random() * 8)
  
  
  const randomColor = bgColor[num];
    return (
      <div>
        <Link to={`/service/${_id}`} className="text-decoration-none">
          <Col>
            <Card className="border-0 card" style={{ backgroundColor: randomColor }}>
              <Card.Img variant="top" src={img} className="card-img" />
              <Card.Body className="rounded-3">
                <h4 className="text-white">{serviceName}</h4>
                <p className="text-white">{Description}</p>
                <h5 className="text-white pb-3">Price: ${Price}</h5>
                <button to={`/service/${_id}`} className="btn btn-light fw-bold"><i className="fas fa-shopping-cart"></i> Book Now</button>
              </Card.Body>
            </Card>
          </Col>
        </Link>
      </div>
    );
};

export default Service;