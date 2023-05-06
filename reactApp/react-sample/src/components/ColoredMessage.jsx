export const ColoredMessage = (props) => {
    console.log(props)
    const contentStyle = {
        color: props.color,
        fontsize: "20px"
    };

    return <p style={contentStyle}> {props.message}</p>;
};