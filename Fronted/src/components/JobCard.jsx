const JobCard = ({ job, onDelete, onStatusChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-2">
      <h3 className="font-bold text-lg text-indigo-700">{job.company}</h3>
      <p><strong>Role:</strong> {job.role}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Date:</strong> {job.date}</p>
      <a href={job.link} className="text-blue-500 underline" target="_blank" rel="noreferrer">
        View Application
      </a>
      <div className="flex gap-2 mt-2">
        <select
          className="border rounded px-2 py-1"
          value={job.status}
          onChange={(e) => onStatusChange(job._id, e.target.value)}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button
          onClick={() => onDelete(job._id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
