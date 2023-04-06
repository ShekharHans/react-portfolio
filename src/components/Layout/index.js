import { Outlet } from 'react-router-dom'
// import Sidebar from '../Sidebar/'
import './index.scss'
import Sidebar from '../Sidebar'



const Layout = () => {
  return (
      <div className="App">
        <Sidebar  />
        
        <div className="page">
          <span className="tags top-tags-html" style={{top:'10%', marginLeft:'-25px'}}>&lt;html&gt;</span>
          <span className="tags top-tags" style={{top:'14%',marginTop:'12px'}}>&lt;body&gt;</span>

          <Outlet />
          <span className="tags bottom-tags" style={{bottom:'5%',marginBottom:'10px',zIndex:'5'}}>
            &lt;/body&gt;
            <br />
            <br />
            <span className="bottom-tag-html"style={{zIndex:'5'}}>&lt;/html&gt;</span>
          </span>
        </div>
        <div class="shadow-title2">CODE</div>
      </div>
  )
}

export default Layout
