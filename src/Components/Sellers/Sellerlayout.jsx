import SDDashB from "./Dashboard"
import { Outlet } from 'react-router-dom'
export default function Sellerlayout() {
    return (
        <>
            <SDDashB />
            <Outlet />
        </>
    )
}