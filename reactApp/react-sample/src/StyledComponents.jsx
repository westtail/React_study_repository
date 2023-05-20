import styled from "styled-components" 

export const StyledComponents = () => {
    return (
        <Scontainer>
            <p className="title">StyledComponentsボタンです</p>
            <button className="button">ボタン</button>
        </Scontainer>
    );
};

const Scontainer = styled.div`
    border: solid 1px #aaa;
    text-align: center;
    `;
