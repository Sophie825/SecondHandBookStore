import './note.css'
import { Link } from "react-router-dom";

export default function Notes() {

  return (
    <div id="notes" className='note'>
      <h1>唐山書店交接系統使用說明</h1>
      <div className="btn">
        <nav>
          <Link to={`/EmployeeManage`}><button className="edit-btn" >員工管理</button></Link>
        </nav>
      </div>
      <p>說明在這說明在這說明在這說明在這說明在這</p>
      <ul>
        <li>
          第一：使用說明...
        </li>
        <li>
          第一：使用說明...
        </li>
        <li>
          第一：使用說明...
        </li>
      </ul>
    </div>
  );
}