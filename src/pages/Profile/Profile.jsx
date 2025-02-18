import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfileNav from "../../components/profile/ProfileNav";
import Address from "../../components/profile/Address";
import Notification from "../../components/profile/Notification";
import Payment from "../../components/profile/Payment";
import Security from "../../components/profile/Security";
import PrivacyPolicy from "../../components/profile/PrivacyPolicy";
import HelpCenter from "../../components/profile/HelpCenter";
import EditProfile from "../../components/profile/EditProfile";
import InviteFriends from "../../components/profile/InviteFriends";
import Logout from "../../components/profile/Logout";

function Profile() {
    return (
        <div className="profile-container container">
            <ProfileNav />
            <Routes>
                <Route path="editprofile" element={<EditProfile />} />
                <Route path="address" element={<Address />} />
                <Route path="notification" element={<Notification />} />
                <Route path="payment" element={<Payment />} />
                <Route path="security" element={<Security />} />
                <Route path="privacypolicy" element={<PrivacyPolicy />} />
                <Route path="helpcenter" element={<HelpCenter />} />
                <Route path="invitefriends" element={<InviteFriends />} />
                <Route path="logout" element={<Logout />} />
            </Routes>
        </div>
    );
}

export default Profile;
