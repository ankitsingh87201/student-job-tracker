import axios from "axios";
import JobCard from "./JobCard";

const JobList = ({ jobs, fetchJobs }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`);
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/jobs/${id}`, { status: newStatus });
      fetchJobs();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default JobList;
