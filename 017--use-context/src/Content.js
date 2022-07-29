import { memo } from "react";
import Paragraph from "./Paragraph";


function Content() {
    return (
        <>
            <h1>What is React?</h1>
            <Paragraph />
        </>
    );
}

export default memo(Content);