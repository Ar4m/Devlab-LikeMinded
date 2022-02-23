import "./topbar.css";
import { Search, Person, Chat, Notifications, Group, Contacts } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">LikeMinded</span>
        </Link>
      </div>
      <div className="topbarCenter">
        
        {/* <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for user"
            className="searchInput"
          />
        </div> */}

        <div className="topbarIconItem">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="topbarIconItemCenter"><Group /></div>
            <div className="topbarIconItemCenter">Groups</div>
          </Link>
        </div>

        <div className="topbarIconItem">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="topbarIconItemCenter"><Contacts /></div>
            <div className="topbarIconItemCenter">Users</div>
          </Link>
        </div>

        <div className="topbarIconItem">
          <Link to="/messenger" style={{ textDecoration: "none", color: "white" }}>
            <div className="topbarIconItemCenter"><Chat /></div>
            <div className="topbarIconItemCenter">Chat</div>
          </Link>
        </div>
        
      </div>

      <div className="topbarRight">
        <Link to={`/profile/${user.username}`} style={{ textDecoration: "none", color: "white" }}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
            style={{ display:'flex', justifyContent:'center', margin:'auto' }}
          />
          <div style={{ display:'flex', justifyContent:'center' }}>Profile</div>
        </Link>
      </div>
    </div>
  );
}
