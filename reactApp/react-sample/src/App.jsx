import { useCallback, useContext, useState} from "react";
import { memo } from 'react';
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModule } from "./CssModule";
import { StyledJsx } from "./StyledJsx";
import { StyledComponents } from "./StyledComponents";
import { TailWindCss } from "./TailWindCss";

import { Child1} from "./components/Child1"
import { Child4} from "./components/Child4"

import { Card } from "./components/Card"
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = memo(() => {
    const onClickButton = () => {
        setNum(num + 1)
    };

    const [num, setNum] = useState(0);

    const onClickReset = useCallback(() => {
        setNum(0);
    },[])

    //context内の値と更新関数を取得
    const {isAdmin, setIsAdmin} = useContext(AdminFlagContext);
    //切り替え時に更新関数を実行
    const onClickSwitch = () => setIsAdmin(!isAdmin)

    //useEffect(() => {
    //    alert();
    //}, [num]);

    return (
        <div>
            <h1>こんにちは</h1>
            <CssModule></CssModule>
            <StyledJsx></StyledJsx>
            <StyledComponents></StyledComponents>
            <TailWindCss></TailWindCss>
            <ColoredMessage color="pink">お元気ですか？</ColoredMessage>
            <ColoredMessage color="blue">こんにちは</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <h1>再レタリングの要素</h1>
            <Child1 onClickReset={onClickReset}></Child1>
            <Child4></Child4>
            {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
            <button onClick={onClickSwitch}>切り替え</button>
            <Card isAdmin={isAdmin}></Card>
        </div>
    );
});