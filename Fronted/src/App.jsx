// App.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await axios.get("http://localhost:5000/api/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🎯 Student Job Tracker</h1>
        <JobForm fetchJobs={fetchJobs} />
        <JobList jobs={jobs} fetchJobs={fetchJobs} />
      </div>
    </div>
  );
}

export default App;
