export const ColorfulMessage = (props) => {
  console.log('---ColorfulMessage---');

  const contensStyleA = {
    color: props.color,
    fontSize: '18px',
  };

  return <p style={contensStyleA}>{props.children}</p>;
};
