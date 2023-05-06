export const App = () => {
    const onClickButton = () => {
        alert();
    };

    const contentStyle = {
        color: "blue",
        fontsize: "20px"
    }
    const contentPinkStyle = {
        color: "pink",
        fontsize: "20px"
    }
    return (
        <div>
            <h1>こんにちは</h1>
            <p style={contentStyle}>こんにちは</p>
            <p style={contentPinkStyle}>こんにちは</p>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};