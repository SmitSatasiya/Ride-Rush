import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfileNav from "../../components/profile/ProfileNav";
import Address from "../../components/profile/Address";
import Payment from "../../components/profile/Payment";
import Security from "../../components/profile/Security";
import PrivacyPolicy from "../../components/profile/PrivacyPolicy";
import HelpCenter from "../../components/profile/HelpCenter";
import {EditProfile, UpdatePassword } from "../../components/profile/EditProfile";
import InviteFriends from "../../components/profile/InviteFriends";
import Logout from "../../components/profile/Logout";

function Profile() {
    return (
        <div className="profile-container container">
            {/* <div className="space"></div> */}
            <ProfileNav />
            <Routes>
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="address" element={<Address />} />
                <Route path="update-password" element={<UpdatePassword />} />
                <Route path="payment" element={<Payment />} />
                <Route path="security" element={<Security />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="help-center" element={<HelpCenter />} />
                <Route path="invite-friends" element={<InviteFriends />} />
                <Route path="logout" element={<Logout />} />
            </Routes>
        </div>
    );
}

export default Profile;
