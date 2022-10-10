import './topbar.css';
import {Link} from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="top">
        <div className="container topIn">
            <div className="topLeft">
                <Link to="/"><img src="images/logo.png" alt="로고" className="topLogo"/></Link>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <Link to="/"><li className="topListItem">about</li></Link>
                    <Link to="/list"><li className="topListItem">list</li></Link>
                    <Link to="/detail"><li className="topListItem">contact</li></Link>
                    <Link to="/write"><li className="topListItem">write</li></Link>
                    <Link to="/settings"><li className="topListItem">logout</li></Link>
                </ul>
            </div>
            <div className="topRight">
                <img src = "images/profile.png" alt ='프로필' className='topImg' />
                <i className="fas fa-search"></i>
            </div>
        </div>
    </div>
  )
}
