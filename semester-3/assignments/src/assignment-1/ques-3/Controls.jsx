function Controls(props) {
  return (
    <div>
      <button onClick={() => props.setCount(props.count + 1)}>Increase</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => props.setCount(props.count - 1)}>Decrease</button>
    </div>
  );
}

export default Controls;
