import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert();
    };

    return (
        <div>
            <h1>こんにちは</h1>
            <ColoredMessage color="pink" message="お元気ですか？"/>
            <ColoredMessage color="blue" message="こんにちは"/>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};