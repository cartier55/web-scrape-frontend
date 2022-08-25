import SideBar from "./Sidebar";

const Layout = (props) => {

    return ( 
        <SideBar>
        <div className="content">
            {props.children}
        </div>
        </SideBar>
     );
}
 
export default Layout;