import robot from '../assets/header.png';
import contact from '../assets/contact.svg';
import house from '../assets/house.svg';
import privacyPolicy from '../assets/policy.svg';

const homePageHeader = {
	title: 'Pixel',
	content:
		"Need a security system but don't know where to start? We've tested all the major DIY and professionally installed security packages to help you determine which is the best smart home security system for you. Your Personalized Home Security Service. Customer Safety Is our Priority.",
	isHomePage: false,
	image: robot,
	imageWidth: '90%',
};

const contactPageHeader = {
	title: 'Contact Us',
	content: "You've got questions ? We've got answers.",
	isHomePage: false,
	image: contact,
	imageWidth: '90%',
};

const privacyPolicyPageHeader = {
	title: 'Privacy Policy',
	content:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
	isHomePage: false,
	image: privacyPolicy,
	imageWidth: '55%',
};

const myHousePageHeader = {
	title: 'My House',
	content:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
	isHomePage: false,
	image: house,
	imageWidth: '90%',
};

export {
	homePageHeader,
	contactPageHeader,
	privacyPolicyPageHeader,
	myHousePageHeader,
};
