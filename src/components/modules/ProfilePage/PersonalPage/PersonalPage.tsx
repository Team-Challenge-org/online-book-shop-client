import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'store/user/selectors';

export default function PersonalPage() {
  const { user } = useSelector(selectUserData);

  const getUser = async () => {
    const { data } = await axios.get(
      `https://online-book-shop-1.onrender.com/api/v1/user/userByToken?token=${user.token}`,
    );
    console.log(data);

    return data;
  };

  return (
    <div>
      <h1>Personal Page</h1>
    </div>
  );
}
