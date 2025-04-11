import { useState } from "react";
import axios from "axios";

const JobForm = ({ fetchJobs }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/jobs", formData);
      await fetchJobs(); 
      
      setFormData({ company: "", role: "", status: "Applied", date: "", link: "" });
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-6 space-y-4"
    >
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="role"
        value={formData.role}
        onChange={handleChange}
        placeholder="Role"
        className="w-full p-2 border rounded"
        required
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="url"
        name="link"
        value={formData.link}
        onChange={handleChange}
        placeholder="Application Link"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
