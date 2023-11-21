
import '../styles/MenuIcon.css'

const MenuIcon = ({ isOpen }) => {

  return (
    <>
      <div className={`line top ${isOpen ? 'open' : ''}`}></div>
      <div className={`line middle ${isOpen ? 'open' : ''}`}></div>
      <div className={`line bottom ${isOpen ? 'open' : ''}`}></div>
    </>
  )
}

export default MenuIcon
