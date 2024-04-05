import { useState, useEffect } from "react";
import axios from "axios";

const GetAllStudents = (url) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setStudents(response.data.data);
      setError(null); // Clear error if data fetching is successful
    } catch (error) {
      setError("An error occurred while fetching data.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Cleanup function
    return () => {
      // Reset students state when unmounting
      setStudents([]);
    };
  }, [url]); // Re-run effect when URL changes

  const refetch = (callback) => {
    fetchData().then(() => {
      if (typeof callback === "function") {
        callback();
      }
    });
  };

  return { students, loading, error, refetch };
};

export default GetAllStudents;
