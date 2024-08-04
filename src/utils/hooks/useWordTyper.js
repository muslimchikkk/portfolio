
import { useState, useEffect, useCallback } from "react";

const useWordTyper = (wordArray) => {
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() *100);
    const period = 2000;

    const typeLetters = useCallback(() => {
        let i = loopNumber % wordArray.length;
        let fullText = wordArray[i];
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
    }, [isDeleting, loopNumber, text.length, wordArray]);



    useEffect(() => {
        let ticker = setInterval(() => {
            typeLetters();
        }, delta);

        return () => { clearInterval(ticker)}
    }, [typeLetters, delta]);

    return text;
};

export default useWordTyper;


