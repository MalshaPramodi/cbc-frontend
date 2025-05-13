import { Link, Route, Routes } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { MdInventory2 } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import AdminProductsPage from "./admin/adminProductsPage";

export default function AdminHomePage() {
    return (
        <div className="bg-blue-200 w-full h-screen flex">
            <div className="w-[20%] h-screen bg-blue-300 flex flex-col items-center space-y-4 pt-8">
                <Link
                    className="flex flex-row items-center gap-2 px-4 py-2 rounded hover:bg-blue-400 transition"
                    to="/admin/dashboard"
                >
                    <GoGraph />
                    Dashboard
                </Link>
                <Link
                    className="flex flex-row items-center gap-2 px-4 py-2 rounded hover:bg-blue-400 transition"
                    to="/admin/products"
                >
                    <MdInventory2 />
                    Products
                </Link>
                <Link
                    className="flex flex-row items-center gap-2 px-4 py-2 rounded hover:bg-blue-400 transition"
                    to="/admin/customers"
                >
                    <FaUsers />
                    Customers
                </Link>
                <Link
                    className="flex flex-row items-center gap-2 px-4 py-2 rounded hover:bg-blue-400 transition"
                    to="/admin/orders"
                >
                    <FaBoxOpen />
                    Orders
                </Link>
            </div>

            <div className="w-[80%] h-screen bg-red-600">
                <Routes path="/*">
                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                    <Route path="/products" element={<AdminProductsPage/>} />
                    <Route path="/customers" element={<h1>Customers</h1>} />
                    <Route path="/orders" element={<h1>Orders</h1>} />
                    <Route path="/*" element={<h1>404 Not Found</h1>} />
                </Routes>
                
            </div>
        </div>
    );
}
