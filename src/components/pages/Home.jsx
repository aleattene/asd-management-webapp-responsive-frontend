import React from 'react';
import CarouselThreeSlides from "../Carousel";
import Container from "react-bootstrap/Container";
import HomeNavbar from "../HomeNavbar";

const Home = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <HomeNavbar/>
            <Container fluid>
                    <CarouselThreeSlides/>
                    {/*<LoginForm/>*/}
            </Container>
        </div>
    );
}

export default Home;