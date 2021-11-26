import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import img1 from '../../Images/banner-1.jpg';
import img2 from '../../Images/banner-2.jpg';
import img3 from '../../Images/banner-3.jpg';
import aboutImage from '../../Images/about.jpg';
import Services from './Services/Services';
// import Offer from './Offer/Offer';

const Home = () => {
    // const [offers, setOffers] = useState([]);

    // useEffect(() => {
    //     fetch('https://serene-tor-46581.herokuapp.com/offers')
    //         .then(res => res.json())
    //         .then(data => setOffers(data));
    // }, []);

    return (
        <Container fluid className="px-0">
            <Carousel fade variant="dark" interval={1000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>

            <Container className="py-5">
                <h2 className="fs-2 fw-bold pb-5"><span className="border-0 border-bottom border-3 border-info">ROOMS & SUITES</span></h2>
                <div className="d-flex flex-wrap justify-content-around my-5">
                    {/* {
                        offers.map(offer => <Offer key={offer._id} offer={offer}></Offer>)
                    } */}
                    <Services></Services>
                </div>

                <h2 className="fs-2 fw-bold pb-5"><span className="border-0 border-bottom border-3 border-info">ABOUT US</span></h2>
                <Container className="mb-5">
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={8}>
                            <img src={aboutImage} className="w-100" alt="" />
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} className="d-flex justify-content-center align-items-center">
                            <ListGroup variant="flush">
                                <ListGroup.Item style={{ backgroundColor: "transparent" }}><h4>Rewarding Excellence</h4> </ListGroup.Item>
                                <ListGroup.Item style={{ textAlign: "justify"}}>
                                    <p>Starhotels, the first American private hotel company by revenue, is a market leader in the upscale, upper-upscale & luxury sectors of the hospitality industry.</p>

                                    <p>The Group vaunts 30 hotels located in the heart of the top American destinations, in addition to London, Paris and New York, with more than 4,200 rooms.</p>

                                    <p>Starhotels is synonymous with the excellence of American hospitality, offering impeccable service that excels at anticipating the guests’ wishes and exceeding their expectations.</p>
                                    
                                    <p>The prestigious Starhotels Collezione – icons of style in the most beautiful destinations in the world – stand out for their strategic positions, sophisticated design and bespoke services. Starhotels Collezione properties are located in Florence, London, Milan, New York, Paris, Rome, Saturnia, Siena, Trieste, Venice and Vicenza.</p>
                                </ListGroup.Item>

                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

                <h2 className="fs-2 fw-bold pb-4"><span className="border-0 border-bottom border-3 border-info">PHOTO GALARY</span></h2>
                <Carousel variant="light" interval={5000}>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/G0JxCmL/Ocean-view.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/jvqZ48d/pool-view.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/GvTnTD5/suite.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/02QJwvH/1.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/Tv9F0x8/2.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/0rBGCnV/3.png"
                                        alt="Second slide"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/CKzLgGm/family-room.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/Y0d8YXy/sofa-bed.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/CWT7BKs/pool.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/h7wLjG9/4.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/gyShTFb/5.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/CzcgkJt/6.png"
                                        alt="Second slide"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/QPQmm4y/Bar-lounge.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/m6tv9mg/Beach-view.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/Rgtpv56/bath.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/xgf047P/7.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/0rBGCnV/3.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/MRKGJSY/10.png"
                                        alt="Second slide"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container>
                            <Row>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/Dz4TYks/Air-Condition.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/283hRPN/desk.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-3"
                                        src="https://i.ibb.co/LY2gKVt/Blackout-Curtains.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/6sgkMsm/11.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/xFrYtWc/12.png"
                                        alt="Second slide"
                                    />
                                </Col>
                                <Col sx={12} sm={12} md={6} lg={4}>
                                    <img
                                        className="d-block w-100 mt-4"
                                        src="https://i.ibb.co/gyShTFb/5.png"
                                        alt="Second slide"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>

        </Container>
    );
};

export default Home;