import React from 'react';
import SearchBar from "../components/SearchBar";
import BottomBar from "../components/BottomBar"; 
import Profile_info from '../components/Profile_info';
const Profile = () => {
    return (
        <div>
           <SearchBar/>
           <Profile_info/>
           <BottomBar/>
        </div>
    );
};

export default Profile;