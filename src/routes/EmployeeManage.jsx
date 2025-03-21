import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import { createUser } from '../api';
import { showusers } from '../api';

export default function EmployeeManage() {
    const [employees, setEmployees] = useState(['員工一', '員工二', '員工三']);
    const [newEmployee, setNewEmployee] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(null);
    const [editEmployee, setEditEmployee] = useState('');

    const handleAddEmployee = async () => {
        if (newEmployee.trim() !== '') {
            try {
                await createUser(newEmployee); // 調用createUser函數發送POST請求到後端API
                setEmployees([...employees, newEmployee]); // 如果成功，更新本地狀態
                setNewEmployee(''); // 清空輸入框
                setIsAdding(false); // 關閉新增表單
                alert('成功建立帳號！');
            } catch (error) {
                console.error('Failed to add employee:', error); // 處理異常情況
                alert('新增員工失敗！');
            }
        }
    };

    const handleEditEmployee = (index) => {
        const updatedEmployees = employees.map((employee, i) => 
            i === index ? editEmployee : employee
        );
        setEmployees(updatedEmployees);
        setIsEditing(null);
        setEditEmployee('');
    };

    const handleDeleteEmployee = (index) => {
        const updatedEmployees = employees.filter((_, i) => i !== index);
        setEmployees(updatedEmployees);

    
    const [homeData, setHomeData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        try {
            console.log('Fetching data from API...');
            const data = await showusers();
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
        <div id="notes" className='note'>
            <h1>員工管理系統</h1>
            {isAdding ? (
                <div className="add-employee-form">
                    <input
                        type="text"
                        value={newEmployee}
                        onChange={(e) => setNewEmployee(e.target.value)}
                        placeholder="輸入新員工姓名"
                        autoFocus
                    />
                    <button className="save-btn" onClick={handleAddEmployee}>儲存</button>
                    <button className="save-btn" onClick={() => setIsAdding(false)}>取消</button>
                </div>
            ) : (
                <div>
                    <button className="edit-btn" onClick={() => setIsAdding(true)}>新增員工</button>
                </div>
            )}
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        {isEditing === index ? (
                            <div className="edit-employee-form">
                                <input
                                    type="text"
                                    value={editEmployee}
                                    onChange={(e) => setEditEmployee(e.target.value)}
                                    placeholder="編輯員工姓名"
                                    autoFocus
                                />
                                <button className="save-btn" onClick={() => handleEditEmployee(index)}>儲存</button>
                                <button className="save-btn" onClick={() => setIsEditing(null)}>取消</button>
                            </div>
                        ) : (
                            <div className="employee-item">
                                {employee}
                                <button className="edit-btn" onClick={() => {
                                    setIsEditing(index);
                                    setEditEmployee(employee);
                                }}>編輯</button>
                                <button className="edit-btn" onClick={() => handleDeleteEmployee(index)}>刪除</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <div style={{ display: 'flex' }}>
                <nav>
                    <Link to={`/Note`}><button className="edit-btn">回上頁</button></Link>
                </nav>
            </div>
        </div>
    );
}
