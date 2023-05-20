export const StyledJsx = () => {
    return (
        <>
            <div className="container2">
                <p className="title2">StyledJsxボタンです</p>
                <button className="button2">ボタン</button>
            </div>
            <style jsx>
                {`
                .container2 {
                    border: solid 1px #aaa;
                    text-align: center;
                }
                .title2 {
                    color: #000;
                }
                .button2 {
                    background-color:  #bbb;
                }
                `}
            </style>
        </>
    );
};