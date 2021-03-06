import React, { useState } from 'react';
import { SignUp } from "./component/SignUp/SignUp";
import { Profile } from "./component/Profile/Profile";

export const App = () => {
	const [userData, updateUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [showProfile, updateShowProfile] = useState({
		profile: false,
	});

	return (
		<div className="App">
			{(showProfile.profile) ?
				<Profile
					userData={userData}
					updateUserData={updateUserData}
					updateShowProfile={updateShowProfile} /> :
				<SignUp
					userData={userData}
					updateUserData={updateUserData}
					updateShowProfile={updateShowProfile} />
			}
		</div>
	);
};