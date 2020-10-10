import React, { useEffect } from 'react';
import axios from 'axios';

const APICall = () => {
  useEffect(() => {
    const axiosFunc = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      const resJson = await response.json()
    }
    axiosFunc()
  }, [])
}
export default resJson