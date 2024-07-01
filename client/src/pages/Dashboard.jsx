import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardCompo from "../components/DashboardCompo";

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
      {/* profile etc... */}
      {tab === "profile" && <DashProfile />}
      {/* posts.. */}
      {tab === "posts" && <DashPosts />}
      {/* users.. */}
      {tab === "users" && <DashUsers />}
      {/* comments */}
      {tab === "comments" && <DashComments />}
      {/* dashboard component */}
      {tab === "dash" && <DashboardCompo />}
    </div>
  );
};

export default Dashboard;
