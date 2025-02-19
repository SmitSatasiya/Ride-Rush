import React from 'react'
import { NavLink } from "react-router-dom";
import ToggleSwitch from '../../global/ToggleSwitch';
function ProfileNav() {
    const navList = [
        {
            icon: `   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1025 1023"><path fill="currentColor" d="M896.428 1023h-768q-53 0-90.5-37.5T.428 895V127q0-53 37.5-90t90.5-37h576l-128 127h-384q-27 0-45.5 19t-18.5 45v640q0 27 19 45.5t45 18.5h640q27 0 45.5-18.5t18.5-45.5V447l128-128v576q0 53-37.5 90.5t-90.5 37.5zm-576-464l144 144l-208 64zm208 96l-160-159l479-480q17-16 40.5-16t40.5 16l79 80q16 16 16.5 39.5t-16.5 40.5z"/></svg>`,
            nav: "Edit Profile",
            link: "/profile/edit-profile"
        },
        {
            icon: `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd" />
                        </svg>`,
            nav: "Address",
            link: "/profile/address"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1Zm-2 0V7a4 4 0 0 0-8 0v1h8Zm-5 6v2h2v-2h-2Zm-4 0v2h2v-2H7Zm8 0v2h2v-2h-2Z"/></svg>`,
            nav: "Update Password",
            link: "/profile/update-password"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20"><path fill="currentColor" d="M4.75 4A2.75 2.75 0 0 0 2 6.75V8h16V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM18 9H2v4.25A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25V9Zm-4.5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z"/></svg>`,
            nav: "Payment",
            link: "/profile/payment"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.263 6.913T12 22Zm0-2.1q2.425-.75 4.05-2.963T17.95 12H12V4.125l-6 2.25v5.175q0 .175.05.45H12v7.9Z"/></svg>`,
            nav: "Security",
            link: "/profile/security"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.075.788-3.888t2.15-3.174Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188q-1.362 1.362-3.175 2.15T12 22Zm0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95Zm-2.6-.4q-.45-.825-.788-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55Zm5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55ZM4.25 14h3.4q-.075-.5-.113-.988T7.5 12q0-.525.038-1.012T7.65 10h-3.4q-.125.5-.188.988T4 12q0 .525.063 1.012T4.25 14Zm5.4 0h4.7q.075-.5.113-.988T14.5 12q0-.525-.038-1.012T14.35 10h-4.7q-.075.5-.113.988T9.5 12q0 .525.038 1.012T9.65 14Zm6.7 0h3.4q.125-.5.188-.988T20 12q0-.525-.063-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12q0 .525-.038 1.012T16.35 14Zm-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8ZM10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8Zm-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.912 5.825T5.1 8Z"/></svg>`,
            nav: "Language",
            lanuage: "English(US)"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M277.333 405.333v85.333h-42.667v-85.333zm99.346-58.824l60.34 60.34l-30.17 30.17l-60.34-60.34zm-241.359 0l30.17 30.17l-60.34 60.34l-30.17-30.17zM256 139.353c64.422 0 116.647 52.224 116.647 116.647c0 64.422-52.225 116.647-116.647 116.647A116.427 116.427 0 0 1 139.352 256c0-64.423 52.225-116.647 116.648-116.647m0 42.666c-40.859 0-73.981 33.123-73.981 74.062a73.76 73.76 0 0 0 21.603 52.296c13.867 13.867 32.685 21.64 52.378 21.603zm234.666 52.647v42.667h-85.333v-42.667zm-384 0v42.667H21.333v-42.667zM105.15 74.98l60.34 60.34l-30.17 30.17l-60.34-60.34zm301.7 0l30.169 30.17l-60.34 60.34l-30.17-30.17zM277.332 21.333v85.333h-42.667V21.333z"/></svg>`,
            nav: "Dark Mode",
            toggle: true
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20.962q-3.013-.895-5.007-3.651Q5 14.554 5 11.1V5.692l7-2.615l7 2.615V11.1q0 1.498-.422 2.88t-1.14 2.674l-2.95-2.95q.237-.379.375-.815T15 12q0-1.246-.877-2.123Q13.246 9 12 9q-1.246 0-2.123.877Q9 10.754 9 12q0 1.246.877 2.123Q10.754 15 12 15q.487 0 .941-.147q.455-.147.828-.441l3.071 3.065q-1.011 1.167-2.18 2.11q-1.168.942-2.66 1.375ZM12 14q-.825 0-1.413-.588T10 12q0-.825.588-1.413T12 10q.825 0 1.413.588T14 12q0 .825-.588 1.413T12 14Z"/></svg>`,
            nav: "Privacy Policy",
            link: "/profile/privacy-policy"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18q.525 0 .888-.363t.362-.887q0-.525-.363-.888T12 15.5q-.525 0-.888.363t-.362.887q0 .525.363.888T12 18Zm-.9-3.85h1.85q0-.9.2-1.325T14 11.75q.875-.875 1.237-1.463T15.6 8.95q0-1.325-.9-2.137T12.275 6q-1.375 0-2.337.675T8.6 8.55l1.65.65q.175-.675.7-1.087t1.225-.413q.675 0 1.125.363t.45.962q0 .425-.275.9t-.925 1.05q-.825.725-1.138 1.388T11.1 14.15ZM5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Z"/></svg>`,
            nav: "Help Center",
            link: "/profile/help-center"


        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 819 622"><path fill="currentColor" d="M552.664 491c41 23 64 61 60 100c-2 24-1 24-32 28c-19 2-140 3-263 3c-140 0-286-1-297-4c-41-11-17-87 37-123c43-27 130-69 154-74c33-7 37-28 0-91c-8-15-17-58-18-104c-1-74 12-124 77-149c12-4 26-6 39-6c43 0 83 24 100 59c23 47 12 170-12 215c-29 51-26 67 6 75c20 5 86 36 149 71zm219-63c32 17 50 48 47 78c-1 18-1 19-25 22c-12 2-75 3-149 3c-13-31-38-59-72-77c-39-22-85-45-120-60c23-11 43-20 52-22c25-6 28-20 0-70c-7-12-15-46-16-82c-1-58 12-98 62-117c10-3 21-5 31-5c33 0 64 18 77 46c17 37 9 133-9 169c-22 40-20 52 5 58c16 4 67 29 117 57z"/></svg>`,
            nav: "Invite Friends",
            link: "/profile/invite-friends"
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H6zm10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414z" clip-rule="evenodd"/></svg>`,
            nav: "Logout",
            link: "/profile/logout",
            logout: true
        },
    ]

    return (
        // <div className="container">
        <div className="main-profile-sidebar">
            <div className="profile-sidebar">
                <div className="top">
                    <div className="profile-title">

                        <h2>
                            {/* <div className="icon" dangerouslySetInnerHTML={{ __html: navList[0].icon }} /> */}
                            Profile
                        </h2>
                        <span>
                            <p>...</p>
                        </span>
                    </div>
                    <div className="profile-img">
                        <div className="user-img">
                            <img src="/images/user.JPG" alt="" />
                        </div>

                    </div>
                    <div className="user-name">
                        <h2>Prit Gujarati</h2>
                    </div>
                    <div className="user-number">
                        <span>+91 70898 98770</span>
                    </div>
                    <span className='bottom-line'></span>
                </div>
                <div className="bottom">
                    <nav>
                        <ul>
                            {Array.isArray(navList) && navList.map((item) => {
                                // console.log(item.icon);
                                return (
                                    <li>
                                        <div className="icon-box">
                                            <div className="icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                        </div>
                                        <NavLink to={item.link ? item.link : ""} className={({ isActive }) => item.link ? (isActive ? "active-nav" : "") : ""}>
                                            {item.nav}
                                        </NavLink>
                                        {/* <NavLink to={item.link ? item.link : ""} className={({ isActive }) => (isActive ? "active-nav" : "")}>{item.nav}</NavLink> */}
                                        {item.toggle ? (
                                            <div className="dark-mode">
                                                <ToggleSwitch />
                                            </div>
                                        ) : item.logout ? (
                                            ""
                                        ) : (
                                            <div className="icon-box right-arrow">
                                                <svg width="256" height="256" viewBox="0 0 256 256">
                                                    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                                                        <path
                                                            d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
                                                            style={{ fill: 'rgb(0,0,0)' }}
                                                            stroke-linecap="round"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        )}
                                        {item.lanuage ? <span className='lanuage'>{item.lanuage}</span> : ""}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        // </div>
    )
}

export default ProfileNav