import { useState, useEffect } from "react";
import axios from "axios";

const GetAllJobs = (url) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { withCredentials: true });
        setJobs(response.data.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Reset students state when unmounting
      setJobs([]);
    };
  }, [url]); // Re-run effect when URL changes

  return { jobs, loading, error };
};

export default GetAllJobs;
