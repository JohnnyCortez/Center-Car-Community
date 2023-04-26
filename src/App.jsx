import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from '../components/nav'
import Home from '../pages/HomePage'
import Groups from '../pages/GroupsPage'
import Community from '../pages/CommunityPage'
import SideDisplay from '../components/SideDisplay'
import Register from '../pages/Register'
import Login from '../pages/LoginPage'

const App = (props) => {
  
  return (
    <div className="App">
    <SideDisplay />
    <Nav />
    <Routes>
        <Route index={true} exact path="/home" element={<Home />} />
        <Route index={true} exact path="/groups" element={<Groups />} />
        <Route index={true} exact path="/community" element={<Community />} />
        <Route index={true} exact path="/register" element={<Register />} />
        <Route index={true} exact path="/login" element={<Login />} />

    </Routes>
    </div>
  )
}

export default App

