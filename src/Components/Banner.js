import { Col, Container, Row } from "react-bootstrap";
import LetsConnectButton from "./LetsConnectButton";
import headerImage from '../assets/img/header-img.svg';
import useWordTyper from "../utils/hooks/useWordTyper";
import { isMobile } from "../utils/helpers/isMobile";

const toRotate = ['Senior software engineer', 'Web developer', 'UI/UX Designer'];

const BannerComponent =  () => {
    const text = useWordTyper(toRotate);

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm ={12} md={6} xl={7}>
                        <span className="tagline">
                            Hello from the beautiful Prague! 
                        </span>
                        <h1>
                             I am Muslimjon {!isMobile && <span className="wrap">{text}</span>}
                        </h1>
                        <p>
                            A Senior Software engineer {isMobile && 'and a tech lead'}  who specialises in frontend development. Focused individual, striving for excellence in building applications that transform the world.
                        </p>
                        <LetsConnectButton />
                    </Col>
                    <Col xs={12} sm ={12} md={6} xl={5} >
                        <img src={headerImage} alt="header" />
                    </Col>                    
                </Row>
            </Container>
        </section>
    )
};

export default BannerComponent;