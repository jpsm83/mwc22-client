import React from "react";
// important warn - from react-router-dom 6 there are lots of changes
// compare with previews versions - read the docs
// react-router-dom 6+ has lots of change - read docs
// here we are using react-router-dom 5.2.0
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import EditUser from "./pages/EditUser/EditUser";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import UserDetail from "./pages/UserDetail/UserDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-detail" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
