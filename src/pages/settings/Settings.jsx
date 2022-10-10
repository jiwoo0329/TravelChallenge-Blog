import './settings.css'
import Header from "../../comp/header/Header";
import SideBar from '../../comp/sidebar/SideBar'

export default function Settings(){
    return(
        <>
        <Header />
        <div className="settings container">
            <div className="settingsWrapper">
                <div className="settingsTittle">
                    <div className="settingsUpdateTitle">Update Your Account</div>
                    <div className="settingsDeleteTitle">Delete Account</div>
                </div>
                <form action="./" className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="images/profile.png" alt="me"/>
                    
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </label>
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="아이디"/>
                    <label>Email</label>
                    <input type="email" placeholder="아이디@email.com"/>
                    <label>Password</label>
                    <input type="text" placeholder="비밀번호"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
        
        </>
    )
}