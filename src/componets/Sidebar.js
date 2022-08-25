import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Navigate, useNavigate } from 'react-router-dom';
import { GiSettingsKnobs, GiMeshNetwork} from "react-icons/gi";

import {FaGem, FaHeart, FaRegLaughWink, FaHome, FaGithub, FaSpider} from 'react-icons/fa';
import Header from './Header';
// import 'react-pro-sidebar/dist/css/styles.css';



const SideBar = (props) => {
    const navigate = useNavigate()
    const {children} = props
    return ( 
        // <div className={'sidebar'}>
<>
            <ProSidebar
                  breakPoint="md"
                  >
                <SidebarHeader>
                <div
                style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    position: '-webkit-sticky',
                    position: 'sticky',
                    top: '0'
                }}
                >
                Scraper SideBar
                </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaHome />}
                            onClick={() => navigate('/')}
                            // suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
                            >
                            Home
                        </MenuItem>
                        <MenuItem icon={<FaSpider />} onClick={(e)=>{navigate('/scrape')}}>Scrape</MenuItem>
                        <MenuItem icon={<GiMeshNetwork />} onClick={(e)=>{navigate('/proxy')}}>Proxy</MenuItem>
                        </Menu>
                        <Menu iconShape="circle">
                        <SubMenu
                            // suffix={<span className="badge yellow">3</span>}
                            title='Settings'
                            icon={<GiSettingsKnobs />}
                            > 
                        </SubMenu>
                        
                    </Menu>
                </SidebarContent>
                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                        >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                            >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            View Source
                            </span>
                        </a>
                    </div>
                </SidebarFooter >
            </ProSidebar>
            <Header/>
             {children}
            </>
        //    {/* <ProSidebar>
        // <Menu iconShape="square">
        // <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        // <SubMenu title="Components" icon={<FaHeart />}>
        // <MenuItem>Component 1</MenuItem>
        // <MenuItem>Component 2</MenuItem>
        // </SubMenu>
        // </Menu>
            // </ProSidebar>; */}
        // </div>
        );
    }
    
    export default SideBar;