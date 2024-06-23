import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlarams = new URLSearchParams(location.search);
    const tabFromUrl = urlarams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  });
  [location.search];

  return (
    <div className="bg-light-background dark:bg-gray-900 min-h-screen flex flex-col md:flex-row">
      <div className="">
        {/* sidebar */}
        <DashSidebar />
      </div>
      <div>
        {/* profile etc... */}
        {tab === "profile" && <DashProfile />}
      </div>
    </div>
  );
};

export default Dashboard;
