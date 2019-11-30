import { Language } from './hooks/useTranslator';

export enum Translation {
	LOGIN = 'LOGIN',
	PASSWORD = 'PASSWORD',
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
	UPLOAD = 'UPLOAD',
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
	BIO = 'BIO',
	PROFILE_CHARACTERIZATION = 'PROFILE_CHARACTERIZATION',
	PROFILE_CHANGE = 'PROFILE_CHANGE',
	PROFILE_COMPUTER_SCIENCE = 'PROFILE_COMPUTER_SCIENCE',
	PROFILE_MATHEMATICS = 'PROFILE_MATHEMATICS',
	PROFILE_STATISTICS = 'PROFILE_STATISTICS',
	OTHER = 'OTHER',
	PROFILE_BACHELOR = 'PROFILE_BACHELOR',
	PROFILE_MASTERS = 'PROFILE_MASTERS',
}
// ts-ignore
export const TRANSLATIONS: { [key in Language]: { [key in Translation]: string } } = {
	EE: {
		LOGIN: 'Logi sisse',
		PASSWORD: 'Parool',
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
		UPLOAD: 'Lae pilt',
		FIRST_NAME: 'Eesnimi',
		LAST_NAME: 'Perenimi',
		USER_DESCRIPTION: 'Kirjelda ennast',
		YES_ACCOUNT: 'On juba kasutaja olemas?',
		NO_ACCOUNT: 'Pole kasutajat?',
		GROUP_NAME: 'Grupi nimi:',
		GROUP_DESCRIPTION: 'Kirjeldage oma gruppi:',
		CANCEL: 'Tühista',
		EDIT_GROUP: 'Muuda gruppi',
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
		ACTIVITIES_INSTRUCTION: 'Vali nimekirjast tegevus mida lisada või kui ei leia siis',
		MAKE_NEW_ONE: 'LISA ENDA TEGEVUS',
		BIO: 'Elulugu',
		PROFILE_CHARACTERIZATION: 'Iseloomustus',
		PROFILE_CHANGE: 'Muuda profiili',
		PROFILE_COMPUTER_SCIENCE: 'Informaatika',
		PROFILE_MATHEMATICS: 'Matemaatika',
		PROFILE_STATISTICS: 'Mat-stat',
		OTHER: 'Muu',
		PROFILE_BACHELOR: 'Bak',
		PROFILE_MASTERS: 'Mag',
	},
	EN: {
		LOGIN: 'Login',
		PASSWORD: 'Password',
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
		UPLOAD: 'Upload',
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
		BIO: 'Biography',
		PROFILE_CHARACTERIZATION: 'Characterization',
		PROFILE_CHANGE: 'Change profile',
		PROFILE_COMPUTER_SCIENCE: 'Computer science',
		PROFILE_MATHEMATICS: 'Mathematics',
		PROFILE_STATISTICS: 'Statistics',
		OTHER: 'Other',
		PROFILE_BACHELOR: 'BSc',
		PROFILE_MASTERS: 'MSc',
	},
};