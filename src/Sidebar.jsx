import Avatar from "@mui/material/Avatar";
import "./Sidebar.css";
import image from "./images/background.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={image} alt="abstract" />
        <Avatar src={user?.photoUrl} className="sidebar_avatar">
          {user?.email[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statnumber">2,532</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statnumber">2,532</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("ReactJS")}
        {recentItem("Design")}
        {recentItem("Googlecloud")}
        {recentItem("NextJS")}
        {recentItem("Developer")}
        {recentItem("softwareengineering")}
      </div>
    </div>
  );
}

export default Sidebar;
