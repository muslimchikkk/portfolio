import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from '../assets/img/header-img.svg';

const BannerComponent =  () => {
    const [loopNumber, setLoopNumber] = useState(0);
    const toRotate = ['Senior software engineer', 'Web developer', 'UI/UX Designer'];
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() *100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)}
    });

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if( !isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNumber(loopNumber+1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Hello from the beautiful Prague! 
                        </span>
                        <h1>
                             I am Muslimjon <span className="wrap">{text}</span>
                        </h1>
                        <p>
                            A Senior Software engineer who specialises in frontend development. Focused individual, striving for excellence in building applications that transform the world.
                        </p>
                        <button onClick={() => console.log('connect')}>
                            <a href="https://www.linkedin.com/in/muslimjon-kholjuraev-458879143" target="_blank" rel="noopener noreferrer">Let's connect <ArrowRightCircle size={25} /></a>
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImage} alt="header image" />
                    </Col>                    
                </Row>
            </Container>
        </section>
    )
};

export default BannerComponent;