
export default function Card({ name, age, job, friend, mood }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>🎊 {name} is a Fantastic name 🎊</h3>
        <p className="mood">{mood ? `💫 Mood: ${mood}` : ""}</p>
      </div>
      <div className="card-body">
        <p>🌸 <strong>{age}</strong> levels completed 🎉</p>
        <p>🐣 You work as a <strong>{job}</strong></p>
        <p>😻 <strong>{friend}</strong> is your best friend 💕</p>
        <div>"Smile — every moment is a gift."🦋</div>
        <button onClick={()=> window.location.reload()}>Generate Another</button>
      </div>
    </div>
  );
}