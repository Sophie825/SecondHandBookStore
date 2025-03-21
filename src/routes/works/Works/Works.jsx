import React, { useState, useEffect } from 'react';
import AllCard from './AllCard';
import '../../../index.css';
import { Overview } from '../../../api';

export default function Works() {

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from API...');
        const data = await Overview();
        console.log('Data received from API:', data);
        setHomeData(data);
      } catch (error) {
        console.error('Error fetching home data:', error);
      }
    };

    fetchData();
  }, []);

  

  const filterDataByType = (type) => {
    return homeData.filter(item => item.source_table === type);
  };

  return (
    <div id="works" className="work">
      <h1>工作總覽</h1>
      <h3>依照工作類別分類</h3>
      <div className="">
        {homeData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className='flex'>
            <AllCard type={'restockandrefund'} data={filterDataByType('restockandrefund')} />
            <AllCard type={'onlineorders'} data={filterDataByType('onlineorders')} />
            <AllCard type={'physicalorders'} data={filterDataByType('physicalorders')} />
            <AllCard type={'eventsTodo'} data={filterDataByType('eventsTodo')} />
            <AllCard type={'sinica'} data={filterDataByType('sinica')} />
          </div>
        )}
      </div>
    </div>
  );
}


{/*
// 使用useState管理CardEmployee的状态
  const [employees, setEmployees] = useState([<CardEmployee key={0} />, <CardEmployee key={1} />, <CardEmployee key={2} />]);

  // 添加新员工的处理函数
  const addEmployee = () => {
    setEmployees([...employees, <CardEmployee key={employees.length} />]);
  }; 
*/}
{/* <div className="header-with-button">
        <h3>依照員工分類</h3>
      </div>
      <div className="cards">
        {employees.length === 0 ? (
          <p>Loading...</p>
        ) : (
          employees.map((employee) => (
            <Card key={employee.id} data={employee} /> 
          ))
        )}
      </div> */}