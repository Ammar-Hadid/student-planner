import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { loadTasks, saveTasks } from "./services/storage/taskStorage.js";

import Dashboard from "./Pages/Dashboard"
import DetailedTaskPage from './Pages/DetailedTaskPage.jsx';
import AuthPage from './Pages/AuthPage.jsx';
import ProtectedRoute from './Components/Routes/ProtectedRoute.jsx';



function App() {
  const [tasks, setTasks] = useState(loadTasks);

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard tasks={tasks} setTasks={setTasks} />
          </ProtectedRoute>
        } />

        <Route path="tasks/:id" element={<DetailedTaskPage tasks={tasks} />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
