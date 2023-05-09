export const StyledJsx = () => {
    return (
        <>
            <div className="container2">
                <p className="title2">css moduleボタンです</p>
                <button className="button2">ボタン</button>
            </div>
            <style jsx>
                {`
                .comtainer2 {
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