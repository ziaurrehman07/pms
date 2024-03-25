import { useState, useEffect } from "react";
import axios from "axios";

const GetAllStudents = (url) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setStudents(response.data.data);
        // console.log(response.data.data);
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
      setStudents([]);
    };
  }, [url]); // Re-run effect when URL changes

  return { students, loading, error };
};

export default GetAllStudents;
