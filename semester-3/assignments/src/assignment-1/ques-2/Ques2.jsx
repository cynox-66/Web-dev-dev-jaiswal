import StudentCard from './StudentCard';

function Ques2() {
  return (
    <div style={{ border: '2px solid #38e02dff', padding: '15px', borderRadius: '2px' }}>
      <h3>Q2. Reusable Student Card</h3>
      <StudentCard name="Dev" rollNo="1" course="B.Tech" />
      <StudentCard name="Arnav" rollNo="2" course="B.Tech" />
      <StudentCard name="Aadi" rollNo="3" course="B.Com" />
    </div>
  );
}

export default Ques2;
