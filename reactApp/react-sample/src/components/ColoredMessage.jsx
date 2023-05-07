export const ColoredMessage = (props) => {
    const { color, children} = props;
    console.log(props)
    const contentStyle = {
        color: color,
        fontsize: "20px"
    };

    return <p style={contentStyle}> {children}</p>;
};