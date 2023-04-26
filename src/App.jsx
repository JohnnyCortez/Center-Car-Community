import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from '../components/nav'
import Home from '../pages/HomePage'
import Groups from '../pages/GroupsPage'
import Community from '../pages/CommunityPage'
import SideDisplay from '../components/SideDisplay'

const App = () => {
  
  return (
    <div className="App">
    <SideDisplay />
    <Nav />
    <Routes>
        <Route index={true} exact path="/" element={<App />} />
        <Route index={true} exact path="/home" element={<Home />} />
        <Route index={true} exact path="/groups" element={<Groups />} />
        <Route index={true} exact path="/community" element={<Community />} />
    </Routes>
    </div>
  )
}

export default App

