import './write.css'
import Header from "../../comp/header/Header";
import SingleForm from '../../comp/singleform/SingleForm'
import SideBar from '../../comp/sidebar/SideBar'

export default function Wite() {
  return (
    <>
        <Header />
    <div className='write container'>
      <SingleForm />
      <SideBar />
      
    </div>
    </>
  )
}
