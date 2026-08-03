function StudentCard(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <p>Name: {props.name}</p>
      <p>Roll No: {props.rollNo}</p>
      <p>Course: {props.course}</p>
    </div>
  );
}

export default StudentCard;
