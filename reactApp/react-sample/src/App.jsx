import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModule } from "./CssModule";
import { StyledJsx } from "./StyledJsx";
import { StyledComponents } from "./StyledComponents";

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
            <CssModule></CssModule>
            <StyledJsx></StyledJsx>
            <StyledComponents></StyledComponents>
            <ColoredMessage color="pink">お元気ですか？</ColoredMessage>
            <ColoredMessage color="blue">こんにちは</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
        </div>
    );
};