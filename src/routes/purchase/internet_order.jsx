import React, { useState, useEffect } from 'react';
import './Card_order.css';
import { createOrder } from '../../api';
import { showonlineorders } from '../../api';

export default function Internet_order() {
  const [title, setTitle] = useState('網路訂單');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [filter, setFilter] = useState('');
  const [tasks, setTasks] = useState([
    { job: 'Job 1', deadline: '到期時間', author: '填寫人', description: '細項說明', responsible: '負責人', status: '未完成', isEditing: false, original: null }
]);


  const handleFilterChange = (event) => {
      setFilter(event.target.value);
  };

  const filteredTasks = tasks.slice().sort((a, b) => {
      if (filter === '由新至舊') {
          return new Date(b.deadline) - new Date(a.deadline);
      } else if (filter === '由舊至新') {
          return new Date(a.deadline) - new Date(b.deadline);
      }
      return 0;
  }).filter(task => {
      if (filter === '釘選' && task.status === '釘選') {
          return true;
      } else if (filter === '已完成' && task.status === '已完成') {
          return true;
      } else if (filter === '未完成' && task.status === '未完成') {
          return true;
      }
      return filter === ''; // 如果沒有過濾條件，顯示所有任務
  });
  
  

  const handleEditClick = (index) => {
      const newTasks = [...tasks];
      if (newTasks[index].isEditing) {
          newTasks[index].isEditing = false;
          newTasks[index].original = null;
      } else {
          newTasks[index].original = { ...newTasks[index] };
          newTasks[index].isEditing = true;
      }
      setTasks(newTasks);
  };

  const handleChange = (index, field, value) => {
      const newTasks = [...tasks];
      newTasks[index][field] = value;
      setTasks(newTasks);
  };

  const addTask = () => {
    setTasks([...tasks, { job: '', deadline: '', author: '', description: '', responsible: '', status: '未完成', isEditing: true, original: null }]);
};
  const handleSaveClick = async (index) => { // 新增處理函數
      const task = tasks[index];
      const newTask = {
          job: task.job,
          deadline: task.deadline,
          author: task.author,
          description: task.description,
          responsibleName: task.responsible,
          status: task.status
      };
      try {
          await createOrder(newTask); // 調用createOrder函數發送POST請求到後端API
          alert('已成功增加訂單');
          const newTasks = [...tasks];
          newTasks[index].isEditing = false;
          setTasks(newTasks);
      } catch (error) {
          console.error('Failed to add order:', error); // 處理異常情況
          alert('新增訂單失敗');
      }
  };


  const handleDeleteClick = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
  };

  const handleCancelClick = (index) => {
      const newTasks = [...tasks];
      if (newTasks[index].original) {
          newTasks[index] = { ...newTasks[index].original, isEditing: false, original: null };
      }
      setTasks(newTasks);

      const [homeData, setHomeData] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            console.log('Fetching data from API...');
            const data = await showonlineorders();
            console.log('Data received from API:', data);
            setHomeData(data);
          } catch (error) {
            console.error('Error fetching home data:', error);
          }
        };
    
        fetchData();
      }, []);
  };

  return (
      <div className="wrapcard_todo">
          <div className="title-container">
  {isEditingTitle ? (
      <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setIsEditingTitle(false)}
          autoFocus
      />
  ) : (
      <h2>{title}</h2>
  )}
  <div className="filter-container">
      <select onChange={handleFilterChange} value={filter}>
          <option value="">選擇過濾器</option>
          <option value="由新至舊">由新至舊</option>
          <option value="由舊至新">由舊至新</option>
          <option value="釘選">釘選</option>
          <option value="已完成">已完成</option>
          <option value="未完成">未完成</option>
      </select>
  </div>
</div>


          {tasks.map((task, index) => (
              <div className="card" key={index}>
                  <div className="container">
                      {task.isEditing ? (
                          <>
                              <p>事項: <input
                                  type="text"
                                  value={task.job}
                                  onChange={(e) => handleChange(index, 'job', e.target.value)}
                              /></p>
                              <p>到期時間: <input
                                  type="date"
                                  value={task.deadline}
                                  onChange={(e) => handleChange(index, 'deadline', e.target.value)}
                              /></p>
                              <p>填寫人: <input
                                  type="text"
                                  value={task.author}
                                  onChange={(e) => handleChange(index, 'author', e.target.value)}
                              /></p>
                              <p>細項說明: <input
                                  type="text"
                                  value={task.description}
                                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                              /></p>
                              <p>負責人: <input
                                  type="text"
                                  value={task.resposible}
                                  onChange={(e) => handleChange(index, 'responsible', e.target.value)}
                              /></p>
                              <p>代辦狀態: 
                                  <select
                                      value={task.status}
                                      onChange={(e) => handleChange(index, 'status', e.target.value)}>
                                      <option value="已完成">已完成</option>
                                      <option value="未完成">未完成</option>
                                      <option value="釘選">釘選</option>
                                  </select>
                              </p>
                              <div className="button-group">
                                  <button className="save-btn" onClick={() => handleSaveClick(index)}>Save</button>
                                  <button className="cancel-btn" onClick={() => handleCancelClick(index)}>Cancel</button>
                              </div>
                          </>
                      ) : (
                          <>
                              <p>任務名稱: {task.job}</p>
                              <p>到期時間: {task.deadline}</p>
                              <p>填寫人: {task.author}</p>
                              <p>細項說明: {task.description}</p>
                              <p>負責人: {task.responsible}</p>
                              <p>代辦狀態： {task.status}</p>
                              <div className="button-group">
                                  <button className="edit-btn" onClick={() => handleEditClick(index)}>Edit</button>
                                  <button className="delete-btn" onClick={() => handleDeleteClick(index)}>Delete</button>
                              </div>
                          </>
                      )}
                  </div>
              </div>
          ))}
          <button className='cardButton' onClick={addTask}>Add</button>
      </div>
      
  );
    
  }