import { useContext } from 'react';
import { AppContext } from './AppContext';
import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageBooks } from './pages/PageBooks';
import { PageLogin } from './pages/PageLogin';
import { PageLogout } from './pages/PageLogout';

function App() {
	const { appTitle, currentUser, loginForm, currentUserIsInAccessGroup } =
		useContext(AppContext);

	return (
		<div className="App">
			<h1>{appTitle} - {loginForm.fields.username}</h1>
			<div className="userInfo">
				Logged in:{' '}
				<span>
					{currentUser.firstName} {currentUser.lastName} (
					{currentUser.accessGroups.join(', ')})
				</span>
			</div>
			<nav>
				<NavLink to="/books">Books</NavLink>
				{currentUserIsInAccessGroup('loggedInUsers') ? (
					<NavLink to="/logout">Logout</NavLink>
				) : (
					<NavLink to="/login">Login</NavLink>
				)}
			</nav>

			<Routes>
				<Route path="/books" element={<PageBooks />} />
				{currentUserIsInAccessGroup('loggedInUsers') ? (
					<Route path="/logout" element={<PageLogout />} />
				) : (
					<Route path="/login" element={<PageLogin />} />
				)}
				<Route path="/" element={<Navigate to="/books" replace />} />
			</Routes>
		</div>
	);
}

export default App;
