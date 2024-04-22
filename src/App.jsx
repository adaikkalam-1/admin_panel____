import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import ProtectedRoute from "./utils/ProtectedRoute";
// import ManageUser from "./Pages/admin/manageUser/ManageUser";
// import Login from "./Pages/login/Login";
// import Layout from "./Layout";
// import Sign_up from "./Pages/signup/Sign_up";
import ManageImage from "./Pages/admin/manageImage/ManageImage";

const App=()=> {

  return (
    
    <Routes>
      <Route path="/login" element={<ManageImage/>}/>
      {/* <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<ManageUser />} />
        </Route>
      </Route> 
       <Route path="/login" element={<Login />} />
       <Route path="/sign_up" element={<Sign_up />} /> */}
      </Routes>
  
  );
}

export default App;

