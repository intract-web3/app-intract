import React from "react";
import userstyle from "./users.module.css";
function Users() {
  return (
    <div className={userstyle.users}>
      <div className={userstyle.content}>
        <div className={userstyle.text}>5M+</div>
        <div className={userstyle.user_text}>Users</div>
      </div>
    </div>
  );
}

export default Users;
