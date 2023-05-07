import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert();
    };

    return (
        <div>
            <h1>こんにちは</h1>
            <ColoredMessage color="pink">お元気ですか？</ColoredMessage>
            <ColoredMessage color="blue">こんにちは</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};