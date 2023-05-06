export const App = () => {
    const onClickButton = () => {
        alert();
    };
    return (
        <div>
            <h1>こんにちは</h1>
            <p>こんにちは</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};