import { Language } from './hooks/useTranslator';

export enum Translation {
	LOGIN = 'LOGIN',
	PASSWORD = 'PASSWORD',
	REPEAT_PASSWORD = 'REPEAT_PASSWORD',
	REGISTER = 'REGISTER',
	ACCEPT = 'ACCEPT',
	DECLINE = 'DECLINE',
	WAITING_RESPONSE = 'WAITING_RESPONSE',
	REQUEST = 'REQUEST',
	MENTOR_PROGRAMME = 'MENTOR_PROGRAMME',
	APPROVED_MENTEES = 'APPROVED_MENTEES',
	JOIN_GROUP = 'JOIN_GROUP',
	MENTORGROUPS = 'MENTORGROUPS',
	MY_MENTORGROUP = 'MY_MENTORGROUP',
	SAVE = 'SAVE',
	APPLIED_MENTEES = 'APPLIED_MENTEES',
	APPROVE = 'APPROVE',
	PROFILE = 'PROFILE',
	ADD_PICTURE = 'ADD_PICTURE',
	CHANGE_PICTURE = 'CHANGE_PICTURE',
	FIRST_NAME = 'FIRST_NAME',
	LAST_NAME = 'LAST_NAME',
	USER_DESCRIPTION = 'USER_DESCRIPTION',
	NO_ACCOUNT = 'NO_ACCOUNT',
	YES_ACCOUNT = 'YES_ACCOUNT',
	GROUP_NAME = 'GROUP_NAME',
	GROUP_DESCRIPTION = 'GROUP_DESCRIPTION',
	CANCEL = 'CANCEL',
	EDIT_GROUP = 'EDIT_GROUP',
	REGISTRATION_ERROR = 'REGISTRATION_ERROR',
	REGISTRATION = 'REGISTRATION',
	ALL_GROUPS = 'ALL_GROUPS',
	ACTIVITIES = 'ACTIVITIES',
	LOGOUT = 'LOGOUT',
	FIND_MENTOR = 'FIND_MENTOR',
	GROUPS = 'GROUPS',
	GRADE_ACTIVITIES = 'GRADE_ACTIVITIES',
	DEADLINES = 'DEADLINES',
	VERIFY_USERS = 'VERIFY_USERS',
	DEGREE = 'DEGREE',
	YEAR = 'YEAR',
	TAGLINE = 'TAGLINE',
	NAME = 'NAME',
	ADD = 'ADD',
	ADD_ACTIVITY = 'ADD_ACTIVITY',
	GRADE_ACTIVITY = 'GRADE_ACTIVITY',
	COMPLETED_ACTIVITIES = 'COMPLETED_ACTIVITIES',
	POINTS = 'POINTS',
	MIN_MEMBERS = 'MIN_MEMBERS',
	APPROVE_ACTIVITY = 'APPROVE_ACTIVITY',
	DECLINE_ACTIVITY = 'DECLINE_ACTIVITY',
	PARTICIPANTS = 'PARTICIPANTS',
	CHANGE = 'CHANGE',
	APPROVE_MENTEES = 'APPROVE_MENTEES',
	APPROVE_USER = 'APPROVE_USER',
	DECLINE_USER = 'DECLINE_USER',
	ADMIN_OVERVIEW = 'ADMIN_OVERVIEW',
	ACTIVITIES_INSTRUCTION = 'ACTIVITIES_INSTRUCTION',
	MAKE_NEW_ONE = 'MAKE_NEW_ONE',
	PROFILE_CHARACTERIZATION = 'PROFILE_CHARACTERIZATION',
	PROFILE_CHANGE = 'PROFILE_CHANGE',
	PROFILE_COMPUTER_SCIENCE = 'PROFILE_COMPUTER_SCIENCE',
	PROFILE_MATHEMATICS = 'PROFILE_MATHEMATICS',
	PROFILE_STATISTICS = 'PROFILE_STATISTICS',
	PROFILE_BACHELOR = 'PROFILE_BACHELOR',
	PROFILE_MASTERS = 'PROFILE_MASTERS',

	/* redirect translations */
	REDIRECT_ALMOST_DONE = 'REDIRECT_ALMOST_DONE',
	REDIRECT_PROFILE_FILL = 'REDIRECT_PROFILE_FILL',
	REDIRECT_FIND_GROUP = 'REDIRECT_FIND_GROUP',
	REDIRECT_MAKE_GROUP = 'REDIRECT_MAKE_GROUP',
	REDIRECT_MAKE_GROUP_INFO_MENTOR = 'REDIRECT_MAKE_GROUP_INFO_MENTOR',
	REDIRECT_FIND_GROUP_INFO_MENTEE = 'REDIRECT_FIND_GROUP_INFO_MENTEE',

	ALREADY_JOINED = 'ALREADY_JOINED',
	BIO = 'BIO',
	DESCRIPTION = 'DESCRIPTION',
	OTHER = 'OTHER',
	COMPLETE_ACTIVITY_TIME = 'COMPLETE_ACTIVITY_TIME',
	ACTIVITY_REJECTED = 'ACTIVITY_REJECTED',
	ACTIVITY_PENDING = 'ACTIVITY_PENDING',
	ADMIN_UNVERIFIED_USERS = 'ADMIN_UNVERIFIED_USERS',
	ADMIN_UNVERIFIED_ACTIVITIES = 'ADMIN_UNVERIFIED_ACTIVITIES',
	ADMIN_MENTORS_CAN_REGISTER = 'ADMIN_MENTORS_CAN_REGISTER',
	ADMIN_MENTEES_CAN_REGISTER = 'ADMIN_MENTEES_CAN_REGISTER',
	NAMELESS_GROUP = 'NAMELESS_GROUP',
	DELETE_USER = 'DELETE_USER',
	VERIFY_USER = 'VERIFY_USER',
	REJECT_USER_REASON = 'REJECT_USER_REASON',
	REJECTION_MODAL_MESSAGE = 'REJECTION_MODAL_MESSAGE',
	USER_IS_REJECTED = 'USER_IS_REJECTED',
	REJECT = 'REJECT',
	VALIDATOR_NOT_SET = 'VALIDATOR_NOT_SET',
	VALIDATOR_NOT_EMAIL = 'VALIDATOR_NOT_EMAIL',
	VALIDATOR_PASSWORD_NOT_EQUAL = 'VALIDATOR_PASSWORD_NOT_EQUAL',
	GOT_IT = 'GOT_IT',
	ACTIVITY_IS_REJECTED = 'ACTIVITY_IS_REJECTED',
	INSERT_POINTS = 'INSERT_POINTS',
	REGISTER_IS_DISABLED = 'REGISTER_IS_DISABLED',
	REGISTER_MENTORS_ONLY = 'REGISTER_MENTORS_ONLY',
	REGISTER_MENTEES_ONLY = 'REGISTER_MENTEES_ONLY',
	ACTIVITY_ACTIVITIES = 'ACTIVITY_ACTIVITIES',
	ACTIVITY_POINTS = 'ACTIVITY_POINTS',
	ACTIVITY_COMPLETE_ACTIVITY = 'ACTIVITY_COMPLETE_ACTIVITY',
	ACVITITY_COMPLETE_IMAGE_FAILED = 'ACVITITY_COMPLETE_IMAGE_FAILED',
	ACVITITY_COMPLETE_ACTIVITY_FAILED = 'ACVITITY_COMPLETE_ACTIVITY_FAILED',
	ACTIVITY_COMPLETE_MIN_PARTICIPANTS = 'ACTIVITY_COMPLETE_MIN_PARTICIPANTS',
	PROFILE_LANGUAGE = 'PROFILE_LANGUAGE',
}
// ts-ignore
export const TRANSLATIONS: {
	[key in Language]: { [key in Translation]: string };
} = {
	EE: {
		LOGIN: 'Logi sisse',
		PASSWORD: 'Parool',
		REPEAT_PASSWORD: 'Korda parooli',
		REGISTER: 'Registreeri',
		ACCEPT: 'Nõustun',
		DECLINE: 'Keeldun',
		WAITING_RESPONSE: 'Ootan vastust',
		REQUEST: 'Moodusta',
		MENTOR_PROGRAMME: 'Mat-Inf tudengite seltsi mentorlusprogramm',
		APPROVED_MENTEES: 'Grupiliikmed:',
		JOIN_GROUP: 'Liitu grupiga',
		MENTORGROUPS: 'Mentorgrupid',
		MY_MENTORGROUP: 'Minu mentorgrupp',
		SAVE: 'Salvesta',
		APPLIED_MENTEES: 'Ootavad vastuvõttu',
		APPROVE: 'Võta vastu',
		PROFILE: 'Minu profiil',
		ADD_PICTURE: 'Lisa pilt',
		CHANGE_PICTURE: 'Muuda pilti',
		FIRST_NAME: 'Eesnimi',
		LAST_NAME: 'Perenimi',
		USER_DESCRIPTION: 'Kirjelda ennast',
		YES_ACCOUNT: 'On juba kasutaja olemas?',
		NO_ACCOUNT: 'Pole kasutajat?',
		GROUP_NAME: 'Grupi nimi:',
		GROUP_DESCRIPTION: 'Kirjeldage oma gruppi:',
		CANCEL: 'Tühista',
		EDIT_GROUP: 'Muuda infot',
		REGISTRATION_ERROR: 'Tekkis viga registreerimisel',
		REGISTRATION: 'Registreerimine',
		ALL_GROUPS: 'Kõik grupid',
		ACTIVITIES: 'Tegevused',
		LOGOUT: 'Logi välja',
		FIND_MENTOR: 'Leia Kaasmentor',
		GROUPS: 'Grupid',
		GRADE_ACTIVITIES: 'Hinda tegevusi',
		DEADLINES: 'Tähtajad',
		VERIFY_USERS: 'Kinnita kasutajaid',
		DEGREE: 'Eriala',
		YEAR: 'Õppeaasta',
		TAGLINE: 'Iseloomusta end 3 sõnaga',
		NAME: 'Nimi',
		ADD: 'Lisa',
		ADD_ACTIVITY: 'Lisa tegevus',
		GRADE_ACTIVITY: 'Hinda tegevust',
		POINTS: 'Punktid',
		MIN_MEMBERS: 'Minimaalne osalejate arv',
		APPROVE_ACTIVITY: 'Kinnita',
		DECLINE_ACTIVITY: 'Keeldu',
		COMPLETED_ACTIVITIES: 'Tehtud tegevused',
		PARTICIPANTS: 'Osalejad',
		CHANGE: 'Muuda',
		APPROVE_MENTEES: 'Kinnita kasutajad',
		APPROVE_USER: 'Kinnita',
		DECLINE_USER: 'Lükka tagasi',
		ADMIN_OVERVIEW: 'Admini ülevaade',
		ACTIVITIES_INSTRUCTION:
			'Vali nimekirjast tegevus mida lisada või kui ei leia siis',
		MAKE_NEW_ONE: 'LISA ENDA TEGEVUS',
		BIO: 'Kirjelda ennast',
		PROFILE_CHARACTERIZATION: 'Iseloomustus',
		PROFILE_CHANGE: 'Muuda profiili',
		PROFILE_COMPUTER_SCIENCE: 'Informaatika',
		PROFILE_MATHEMATICS: 'Matemaatika',
		PROFILE_STATISTICS: 'Mat-stat',
		OTHER: 'Muu',
		PROFILE_BACHELOR: 'Bak',
		PROFILE_MASTERS: 'Mag',
		REDIRECT_ALMOST_DONE: 'Peaaegu valmis!',
		REDIRECT_FIND_GROUP: 'Aeg omale grupp leida!',
		REDIRECT_MAKE_GROUP: 'Aeg mentorgrupp moodustada!',
		REDIRECT_MAKE_GROUP_INFO_MENTOR:
			'Saada taotlus teisele mentorile, et temaga koos grupp moodustada. Taotlusi saab küll mitu saata aga esimene kes vastu võtab, saab sinu paariliseks.',
		REDIRECT_FIND_GROUP_INFO_MENTEE:
			'Leia omale meelepärane grupp ning kandideeri sellesse nende lehelt. Grupi liitumise taotlusi saab küll mitu saata aga sind lisatakse esimesse gruppi kes su vastu võtab.',
		ALREADY_JOINED: 'Juba liitunud',
		DESCRIPTION: 'Kirjeldus',
		COMPLETE_ACTIVITY_TIME: 'Toimumise aeg',
		ACTIVITY_REJECTED: 'Tegevus tagasilükatud',
		ACTIVITY_PENDING: 'Ootab kinnitust',
		ADMIN_UNVERIFIED_USERS: 'Kinnitamata kasutajaid',
		ADMIN_UNVERIFIED_ACTIVITIES: 'Kinnitamata tegevusi',
		ADMIN_MENTORS_CAN_REGISTER: 'Registreerimine avatud mentoritele',
		ADMIN_MENTEES_CAN_REGISTER: 'Registreerimine avatud menteedele',
		NAMELESS_GROUP: 'Nimeta grupp',
		DELETE_USER: 'Kustuta kasutaja',
		VERIFY_USER: 'Kinnita kasutaja',
		REJECT_USER_REASON: 'Sisesta tagasilükkamise põhjus',
		REJECTION_MODAL_MESSAGE: 'Sõnum kasutajale',
		USER_IS_REJECTED: 'Kasutaja on tagasilükatud',
		REJECT: 'Lükka tagasi',
		VALIDATOR_NOT_SET: 'See väli on kohustuslik',
		VALIDATOR_NOT_EMAIL: 'Sisestus pole email',
		VALIDATOR_PASSWORD_NOT_EQUAL: 'Paroolid on erinevad',
		GOT_IT: 'Sain aru',
		REDIRECT_PROFILE_FILL:
			'Tubli. Paar asja on veel vaja teha, enne kui laseme teid rakenduse juurde. Kõigepealt täidke oma profiil ära.',
		ACTIVITY_IS_REJECTED: 'Tegevus on tagasi lükatud',
		INSERT_POINTS: 'Sisesta punktide arv',
		REGISTER_IS_DISABLED: 'Registreerimine on suletud',
		REGISTER_MENTORS_ONLY: 'Mentoritele',
		REGISTER_MENTEES_ONLY: 'Menteedele',
		ACTIVITY_ACTIVITIES: 'Grupi tegevusi kokku',
		ACTIVITY_POINTS: 'Grupi teenitud punktid',
		ACTIVITY_COMPLETE_ACTIVITY: 'Tegevuse lõpetamine',
		ACVITITY_COMPLETE_IMAGE_FAILED: 'Pildi üleslaadimine ebaõnnestus',
		ACVITITY_COMPLETE_ACTIVITY_FAILED: 'Tegevuse lõpetamine ebaõnnestus',
		ACTIVITY_COMPLETE_MIN_PARTICIPANTS: 'Miinimum osalejate arv',
		PROFILE_LANGUAGE: 'Keel',
	},
	EN: {
		LOGIN: 'Login',
		PASSWORD: 'Password',
		REPEAT_PASSWORD: 'Repeat password',
		REGISTER: 'Register',
		ACCEPT: 'Accept',
		DECLINE: 'Decline',
		WAITING_RESPONSE: 'Waiting Response',
		REQUEST: 'Form',
		MENTOR_PROGRAMME: "Mat-Inf student society's mentor programme",
		APPROVED_MENTEES: 'Group members:',
		JOIN_GROUP: 'Join Group',
		MENTORGROUPS: 'Mentorgroups',
		MY_MENTORGROUP: 'My mentorgroup',
		SAVE: 'Save',
		APPLIED_MENTEES: 'Applied mentees',
		APPROVE: 'Approve',
		PROFILE: 'My Profile',
		ADD_PICTURE: 'Add picture',
		CHANGE_PICTURE: 'Change picture',
		FIRST_NAME: 'First Name',
		LAST_NAME: 'Last Name',
		USER_DESCRIPTION: 'Desribe yourself',
		YES_ACCOUNT: 'Already have an account?',
		NO_ACCOUNT: "Don't have an account?",
		GROUP_NAME: 'Group name:',
		GROUP_DESCRIPTION: 'Describe the group:',
		CANCEL: 'Discard',
		EDIT_GROUP: 'Edit group',
		REGISTRATION_ERROR: 'An error was encountered during registration',
		REGISTRATION: 'Registration',
		ALL_GROUPS: 'All groups',
		ACTIVITIES: 'Activities',
		LOGOUT: 'Logout',
		FIND_MENTOR: 'Find Co-Mentor',
		GROUPS: 'Groups',
		GRADE_ACTIVITIES: 'Grade activities',
		DEADLINES: 'Deadlines',
		VERIFY_USERS: 'Verify users',
		DEGREE: 'Degree',
		YEAR: 'Year',
		TAGLINE: 'Tagline',
		NAME: 'Name',
		ADD: 'Add',
		ADD_ACTIVITY: 'Add activity',
		GRADE_ACTIVITY: 'Grade activity',
		POINTS: 'Points',
		MIN_MEMBERS: 'Minimum number of participants',
		APPROVE_ACTIVITY: 'Approve',
		DECLINE_ACTIVITY: 'Decline',
		COMPLETED_ACTIVITIES: 'Completed Activities',
		PARTICIPANTS: 'Participants',
		CHANGE: 'Change',
		APPROVE_MENTEES: 'Unapproved mentees',
		APPROVE_USER: 'Approve',
		DECLINE_USER: 'Decline',
		ADMIN_OVERVIEW: 'Admin Overview',
		ACTIVITIES_INSTRUCTION: 'Choose from the list or',
		MAKE_NEW_ONE: 'MAKE A NEW ONE',
		BIO: 'Describe yourself',
		PROFILE_CHARACTERIZATION: 'Characterization',
		PROFILE_CHANGE: 'Change profile',
		PROFILE_COMPUTER_SCIENCE: 'Computer science',
		PROFILE_MATHEMATICS: 'Mathematics',
		PROFILE_STATISTICS: 'Statistics',
		OTHER: 'Other',
		PROFILE_BACHELOR: 'BSc',
		PROFILE_MASTERS: 'MSc',
		REDIRECT_ALMOST_DONE: 'Almost done!',
		REDIRECT_FIND_GROUP: 'Time to find a group!',
		REDIRECT_MAKE_GROUP: 'Time to create the mentorgroup!',
		REDIRECT_MAKE_GROUP_INFO_MENTOR:
			'Send a request to another mentor, to form a mentorgroup with him/her. You can send multiple requests but the first one to accept will be your partner.',
		REDIRECT_FIND_GROUP_INFO_MENTEE:
			'Find a group you like and request to join them on their page. You can send multiple join requests but the first ones to accept you, will be your group.',
		ALREADY_JOINED: 'Already joined',
		DESCRIPTION: 'Description',
		COMPLETE_ACTIVITY_TIME: 'Completion time',
		ACTIVITY_REJECTED: 'Activity rejected',
		ACTIVITY_PENDING: 'Activity pending',
		ADMIN_UNVERIFIED_USERS: 'Unverified users',
		ADMIN_UNVERIFIED_ACTIVITIES: 'Unverified activities',
		ADMIN_MENTORS_CAN_REGISTER: 'Registration open for mentors',
		ADMIN_MENTEES_CAN_REGISTER: 'Registration open for menetees',
		NAMELESS_GROUP: 'Nameless group',
		DELETE_USER: 'Delete account',
		VERIFY_USER: 'Verify user',
		REJECT_USER_REASON: 'Enter the reason for rejecting',
		REJECTION_MODAL_MESSAGE: 'Message to the user',
		USER_IS_REJECTED: 'User is rejected',
		REJECT: 'Reject',
		VALIDATOR_NOT_SET: 'This field is required',
		VALIDATOR_NOT_EMAIL: 'Invalid email address',
		VALIDATOR_PASSWORD_NOT_EQUAL: "Passwords don't match",
		GOT_IT: 'Got it',
		REDIRECT_PROFILE_FILL:
			'There are a few things we need to do to get you up and running. Please fill out your profile info first.',
		ACTIVITY_IS_REJECTED: 'Activity is rejected',
		INSERT_POINTS: 'Insert the number of points',
		REGISTER_IS_DISABLED: 'Registration is not available',
		REGISTER_MENTORS_ONLY: 'For mentors',
		REGISTER_MENTEES_ONLY: 'For mentees',
		ACTIVITY_ACTIVITIES: 'Total completed activities',
		ACTIVITY_POINTS: 'Total points',
		ACTIVITY_COMPLETE_ACTIVITY: 'Complete activity',
		ACVITITY_COMPLETE_IMAGE_FAILED: 'Image upload failed',
		ACVITITY_COMPLETE_ACTIVITY_FAILED: 'Completing the activity failed',
		ACTIVITY_COMPLETE_MIN_PARTICIPANTS: 'Minimum number of participants',
		PROFILE_LANGUAGE: 'Language',
	},
};
