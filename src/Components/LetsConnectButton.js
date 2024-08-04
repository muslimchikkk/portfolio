import React from "react"
import LinkTargetBlank from "./LinkTargetBlank";
import { ArrowRightCircle } from "react-bootstrap-icons";

const LetsConnectButton = () => (
    <button>
        <LinkTargetBlank href='https://www.linkedin.com/in/muslimjon-kholjuraev-458879143'>
            Let's connect <ArrowRightCircle size={25} />
        </LinkTargetBlank>
    </button>
);

export default LetsConnectButton;