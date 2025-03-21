import React, { useState, useEffect } from 'react';
import ListCard from "../../cards/ListCard";
import { Todaytodo } from '../../api';

export default function Home() {
  const [homeData, setHomeData] = useState([]);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from API...');
        const data = await Todaytodo();
        console.log('Data received from API:', data);
        setHomeData(data);
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    fetchData();

    // Set the current date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'};
    const formattedDate = today.toLocaleDateString('zh-CN', options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div id="home">
      <h1>今日工作</h1>
      <h3>今天的日期：<span id="current-date">{currentDate}</span></h3>
      {homeData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        homeData.map((item) => (
          <ListCard key={item.id} data={item} />
        ))
      )}
    </div>
  );
}
