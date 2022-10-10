import './sidebar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src="images/slidebar.jpg" alt="h1" />
            <p>
                좁은 연못에 사는 개구리에게 바다를 이야기할 수 없고, 여름 한철을 사는 벌레에게 차가운 얼음을 이야기할 수 없다. - 장자
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                CATAGORIES
            </span>
            <ul className="sidebarList">
              <li className="slidebarListItem">Travel</li>
              <li className="slidebarListItem">Park</li>
              <li className="slidebarListItem">Town</li>
              <li className="slidebarListItem">Play</li>
              <li className="slidebarListItem">Train</li>
              <li className="slidebarListItem">View</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                TAG
            </span>
            <div className="tagList">
              <span className="tagListItem">여행</span>
              <span className="tagListItem">공원</span>
              <span className="tagListItem">도심</span>
              <span className="tagListItem">놀거리</span>
              <span className="tagListItem">교통</span>
              <span className="tagListItem">볼거리</span>
              <span className="tagListItem">떠나요</span>
              <span className="tagListItem">둘이서</span>
              <span className="tagListItem">모든걸</span>
              <span className="tagListItem">훌훌</span>
              <span className="tagListItem">버리고</span>
              <span className="tagListItem">제주도</span>
            </div>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                FOLLOW ME
            </span>
            <div className="socialList">
                <i className="socialItem fa-brands fa-facebook-square"></i>
                <i className="socialItem fa-brands fa-twitter-square"></i>
                <i className="socialItem fa-brands fa-pinterest-square"></i>
                <i className="socialItem fa-brands fa-instagram-square"></i>
            </div>
        </div>
    </div>
  )
}
