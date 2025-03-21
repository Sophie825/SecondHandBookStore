import image from '../../public/image.png';
import { Outlet, Link } from "react-router-dom";

// import { getWorks } from "../Work";

// export async function loader() {
//     const works = await getWorks();
//     return { works };
// }

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1><nav><Link to={`/Note`}>唐山書店交接系統使用說明</Link></nav></h1>
                <img src={image} alt="tonsan bokstore"></img>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/Home`}>今日工作</Link>
                            <Link to={`/Works`}>工作總覽</Link>
                            <p></p>
                        </li>
                        <li><b>紀錄</b>
                            <li>
                                <Link to={`/deliver_goods`}>進退貨</Link>
                            </li>
                        </li>
                        <li><b>採購</b>
                            <li>
                                <Link to={`/internet_order`}>網路訂單</Link>
                            </li>
                            <li>
                                <Link to={`/store_order`}>實體訂單</Link>
                            </li>
                            <li>
                                <Link to={`/river_order`}>四分溪</Link>
                            </li>
                        </li>
                        <li><b>活動</b>
                            <li>
                                <Link to={`/to_do_list`}>待辦事項</Link>
                            </li>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}