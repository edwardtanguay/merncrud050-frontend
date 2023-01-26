export interface IOriginalEditFields {
	title: string,
	description: string,
	language: string
}

export interface IBook {
	_id: string,
	title: string,
	description: string,
	numberOfPages: number,
	language: string,
	languageText: string,
	imageUrl: string,
	buyUrl: string,
	isBeingEdited: boolean
	originalEditFields: IOriginalEditFields
}

export const blankNewBook: IOriginalEditFields = {
	title: '',
	description: '',
	language: ''
}

export interface ILoginFields {
	username: string,
	password: string
}

export interface ILoginForm {
	fields: ILoginFields,
	message: string
}

export const blankLoginForm: ILoginForm = {
	fields: {
		username: '',
		password: ''
	},
	message: ''
}

export interface IUser {
	_id: string,
	username: string,
	firstName: string,
	lastName: string,
	accessGroups: string[]
}

export const blankUser = {
	_id: '',
	username: '',
	firstName: '',
	lastName: '',
	accessGroups: [],
}

export const anonymousUser = {
	_id: '',
	username: 'anonymousUser',
	firstName: '',
	lastName: '',
	accessGroups: [],
}