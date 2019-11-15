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
	SAVE_CHANGES = 'SAVE_CHANGES',
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
		APPROVED_MENTEES: 'Grupiga liitunud juba:',
		JOIN_GROUP: 'Liitu gruppiga',
		MENTORGROUPS: 'Mentorgrupid',
		MY_MENTORGROUP: 'Minu mentorgrupp',
		SAVE_CHANGES: 'Salvesta muutused',
		APPLIED_MENTEES: 'Ootavad vastuvõttu',
		APPROVE: 'Võta vastu',
		PROFILE: 'Minu profiil',
		UPLOAD: 'Lae üles',
		FIRST_NAME: 'Eesnimi',
		LAST_NAME: 'Perenimi',
		USER_DESCRIPTION: 'Kirjelda ennast',
		YES_ACCOUNT: 'On juba kasutaja olemas?',
		NO_ACCOUNT: 'Pole kasutajat?',
		GROUP_NAME: 'Grupi nimi:',
		GROUP_DESCRIPTION: 'Kirjelda gruppi:',
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
		VERIFY_USERS: 'Kinnita kasutajad',
		DEGREE: 'Eriala',
		YEAR: 'Õppeaasta',
		TAGLINE: 'Iseloomustavad sõnad',
		NAME: 'Nimi',
	},
	EN: {
		LOGIN: 'Login',
		PASSWORD: 'Password',
		REGISTER: 'Register',
		ACCEPT: 'Accept',
		DECLINE: 'Decline',
		WAITING_RESPONSE: 'Waiting Response',
		REQUEST: 'Request',
		MENTOR_PROGRAMME: "Mat-Inf student society's mentor programme",
		APPROVED_MENTEES: 'Approved mentees:',
		JOIN_GROUP: 'Join Group',
		MENTORGROUPS: 'Mentorgroups',
		MY_MENTORGROUP: 'My mentorgroup',
		SAVE_CHANGES: 'Save changes',
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
	},
};
