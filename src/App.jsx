import Header from './components/Header';
import Form from './components/Input';
import Card from './components/Card';
import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ name: "", age: 0, job: "", friend: "", mood: "" });
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState("");

  function handleNameChange(event) {
    setForm({ ...form, name: event.target.value });
    setError("");
  }
  function handleAgeChange(event) {
    setForm({ ...form, age: event.target.value });
    setError("");
  }
  function handleJobChange(event) {
    setForm({ ...form, job: event.target.value });
    setError("");
  }
  function handleFriendChange(event) {
    setForm({ ...form, friend: event.target.value });
    setError("");
  }
  function handleMoodChange(event) {
    setForm({ ...form, mood: event.target.value });
    setError("");
  }

  function onClick() {
    if (
      form.name.trim() === "" ||
      form.age === "" ||
      form.job.trim() === "" ||
      form.friend.trim() === "" ||
      form.mood.trim() === ""
    ) {
      setShowCard(false);
      setError("Please fill all fields 😊");
    } else if (/\d/.test(form.name) || /\d/.test(form.friend)) {
      setShowCard(false);
      setError("Name should not contain numbers! 🥲");
    } else {
      setShowCard(true);
      setError("");
    }
  }

  function handleBack() {
    setShowCard(false);
  }

  return (
    <div className="App">
      <Header />

      {/* لو الكارد مش ظاهر اعرض الفورم */}
      {!showCard && (
        <Form
          onChangeName={handleNameChange}
          onChangeAge={handleAgeChange}
          onChangeJob={handleJobChange}
          onChangeFriend={handleFriendChange}
          onChangeMood={handleMoodChange}
          NameValue={form.name}
          AgeValue={form.age}
          JobValue={form.job}
          FriendValue={form.friend}
          MoodValue={form.mood}
          onClick={onClick}
        />
      )}

      {/* لو الكارد ظاهر اعرضه فقط */}
      {showCard && (
        <Card
          name={form.name}
          age={form.age}
          friend={form.friend}
          job={form.job}
          mood={form.mood}
          onBack={handleBack} 
        />
      )}

      {error && <div className="alert">{error}</div>}
    </div>
  );
}

export default App;
