import RightLinks from "../Header/RightLinks"

function HeaderDashboard() {
  return (
    <div className="navbar bg-base-100 shadow mb-2">
        <div className="flex-1">
            <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
                <i className="bi bi-list text-2xl"></i>
            </label>
        </div>
        <RightLinks/>
    </div> 
  )
}

export default HeaderDashboard