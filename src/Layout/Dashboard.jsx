import { BsShop } from "react-icons/bs";
import {
  FaHome,
  FaList,
  FaShoppingCart,
  FaStreetView,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdMenuOpen, MdOutlineEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // TODO :  get isAdmin value from database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex ">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 text-xl ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
             
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart 
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaStreetView></FaStreetView>
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaList></FaList>
                  Payment History
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links  */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdMenuOpen />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad">
              <BsShop />
              Our Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/contact">
              <MdOutlineEmail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-4 font-lato">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
