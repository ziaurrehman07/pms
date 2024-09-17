import { useNavigate } from "react-router-dom";
import LogoutModal from "../../components/LogoutModal";
import axios from "axios";
import { useState } from "react";

function MasterAdminHome() {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get(
        "https://pmsservice.onrender.com/api/v1/users/log-out-user",
        {
          withCredentials: true,
        }
      );
      window.localStorage.clear();
      navigate("/login");
      console.log("Logout clicked");
      setLogoutModalOpen(false);
    } catch (error) {
      console.error("Logout Failed", error);
    }
  };
  return (
    <div className="flex h-screen bg-black p-4">
      <div className="h-12 bg-white w-full rounded-md p-2 flex items-center justify-between px-12">
        <div>hello admin</div>
        <div onClick={() => setLogoutModalOpen(true)}>Logout</div>
        <LogoutModal
          isOpen={isLogoutModalOpen}
          onClose={() => setLogoutModalOpen(false)}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
}

export default MasterAdminHome;
