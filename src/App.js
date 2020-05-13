import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';

function App() {
  const [questions, setQuestions] = useState([]);
  const [questionsBackup, setQuestionsBackup] = useState([]);
  const db = firebase.firestore();
  useEffect(() => {
    db.collection('questions').get().then((snapshot) => {
      const links = [];
      snapshot.forEach((doc) => {
        links.push({ id: doc.id, ...doc.data() });
      });
      setQuestions(links);
      setQuestionsBackup(links);
    });
  }, []);
  const handleSearch = (e) => {
    const pattern = e.target.value;
    const newarr = questionsBackup.filter((question) => {
      const title = question.name;
      return title.includes(pattern);
    });
    setQuestions(newarr);
  };
  return (
    <div className="container">
      <div className="search">
        <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="Search question" onChange={handleSearch} />
      </div>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Title</th>
            </tr>
          </thead>
          <tbody>

            {questions.map((question, i) => (
              <tr>
                <td className="border px-4 py-2"><span style={{ color: 'grey' }}>{i + 1}</span></td>
                <td className="border px-4 py-2">
                  <a href={question.url} target="_blank" rel="noopener noreferrer">{question.name}</a>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
