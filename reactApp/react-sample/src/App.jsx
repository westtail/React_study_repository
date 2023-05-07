import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        setNum(num + 1)
    };

    const [num, setNum] = useState(0);

    useEffect(() => {
        alert();
    }, [num]);

    return (
        <div>
            <h1>こんにちは</h1>
            <ColoredMessage color="pink">お元気ですか？</ColoredMessage>
            <ColoredMessage color="blue">こんにちは</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </div>
    );
};