import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Footer from "./components/Footer";
// import {
//   AddWiki,
//   Changepassword,
//   Checkemail,
//   CreateBundle,
//   EditBundle,
//   EditProfile,
//   Members,
//   Privacy,
//   Profile,
//   ResetPassword,
//   Resource,
//   Resources,
//   Service,
//   Signin,
//   Signup,
//   Support,
//   Users,
//   Wiki,
//   WikiDetail,
//   WikiUpdate,
// } from "./pages/data";
// import { Token } from "./services/service";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
