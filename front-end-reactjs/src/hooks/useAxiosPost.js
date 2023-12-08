import { useState } from "react";
import axios from 'axios';

const useAxiosPost = (url) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    setLoading(true);
    try {
      const response = await axios.postForm(url, data);
      console.log(response);
      setResult(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, postData };
};

export default useAxiosPost;
