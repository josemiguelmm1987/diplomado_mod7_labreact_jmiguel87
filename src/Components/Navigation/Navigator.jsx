import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/features/form/formSlice";
import { useState } from "react";
const Navigator = () => {
  const { username, email, modalType } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setShowLogoutModal(false); // Cierra el modal
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/" className="nav-link">
            LandingPage
          </Link>
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Product
          </Link>
          <Link to="/think" className="nav-link">
            Think
          </Link>
          <Link to="/counter" className="nav-link">
            Counter
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </div>
        <div className="nav-user-info">
          {modalType === "success" && (
            <>
              <span>
                {" "}
                Bienvenido {username} | {email}
              </span>
              <button
                className="btn-logout"
                onClick={() => setShowLogoutModal(true)}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
      {showLogoutModal && (
        <div className="modal-logout">
          <div className="notification-logout">
            <p>¿Estás seguro de que quieres cerrar sesión?</p>
            <div className="modal-buttons">
              <button className="btn-accept" onClick={handleLogout}>
                Presiona el botón para salir!!!
              </button>
              <button
                className="btn-cancel"
                onClick={() => setShowLogoutModal(false)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigator;
