import FADashB from './Dashboard'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <FADashB />
            <Outlet />
        </>
    )
}