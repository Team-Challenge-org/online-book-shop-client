import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import axiosConfig from 'utils/axiosConfig';

export default function PersonalPage() {
  //useEffect(() => {
  //  const getData = async () => {
  //    const { data } = await axiosConfig.get('/api/v1/profile/user');

  //    console.log(data);
  //    return data;
  //  };

  //  getData();
  //}, []);
  return (
    <div>
      <h1>Personal Page</h1>
    </div>
  );
}
