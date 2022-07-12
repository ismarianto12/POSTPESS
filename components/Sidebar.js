import menudata from '../helpers/menu'
import Link from 'next/link'
const Sidebar = () => {

    return (<>


        <div className="position-sticky pt-3">
            <ul className="nav flex-column">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted" style={{
                    'background': '#ddd',
                    'padding': '11px'
                }}>
                    <span>Main Panel</span>
                    <a className="link-secondary" href="#" aria-label="Add a new report">

                    </a>
                </h6>
                {menudata.map((a) => {
                    return (<><li
                        className="nav-item">
                        <Link href={`${a.url}`}>
                            <a className="nav-link" href="#" style={{
                                'color': '#fff'
                            }}>
                                {a.icon}
                                {a.name}
                            </a>
                        </Link>
                    </li></>)
                })}


            </ul>
        </div>

    </>)
}

export default Sidebar;