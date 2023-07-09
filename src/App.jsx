import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Landing from "./pages/Landing/Landing";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import Community from "./pages/Community/Community";
import Leaders from "./pages/Leaders/Leaders";
import Events from "./pages/Events/Events";
import UpdateProfile from "./pages/User/UpdateProfile";
import Map from "./pages/Community/Map";
import AppLayout from "./layouts/AppLayout";
import Authentication from "./pages/Auth/Authentication";
import UserAccount from "./pages/UserAccount/UserAccount";
import SingleCommunity from "./pages/SingleCommunity/SingleCommunity";
import CreateCommunity from "./pages/Community/CreateCommunity";

function App() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Router>
        <Navbar />
        <section className="flex-1">
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index path="/" element={<Landing />} />
              <Route path="community" element={<Community />} />
              <Route path="community/:id" element={<SingleCommunity />} />
              <Route path='create-community' element={<ProtectedRoute onlyWhenUser={true}><CreateCommunity /></ProtectedRoute>} />
              <Route path="community-leaders" element={<Leaders />} />
              <Route path="upcoming-events" element={<Events />} />
              <Route
                path="update-profile"
                element={
                  <ProtectedRoute onlyWhenUser={true}>
                    <UserAccount />
                  </ProtectedRoute>
                }
              />
              <Route path="auth" element={<ProtectedRoute><Authentication/></ProtectedRoute>}>
                <Route
                  index path="login"
                  element={
                    <ProtectedRoute>
                      <Signin />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="signup"
                  element={
                    <ProtectedRoute>
                      <Signup />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Route>
            <Route
              path="map"
              element={
                <ProtectedRoute onlyWhenUser={true}>
                  <Map />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="account"
              element={
                <ProtectedRoute onlyWhenUser={true}>
                  <UserAccount />
                </ProtectedRoute>
              }
            /> */}
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </section>
              
        <Footer />
      </Router>
    </main>
  )
}

export default App