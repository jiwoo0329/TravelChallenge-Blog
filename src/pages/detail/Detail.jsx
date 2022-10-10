import'./detail.css'
import Header from "../../comp/header/Header"
import SideBar from '../../comp/sidebar/SideBar'
import Single from '../../comp/singlepost/SinglePost'



export default function Detail() {
  return (
    <>
    <Header/>
        <div className='detail container'>
            {/*detail*/}
            <Single />
            <SideBar />
        </div>
    </>
  )
}
