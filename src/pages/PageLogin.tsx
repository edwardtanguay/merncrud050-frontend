import { useContext, useRef } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageLogin = () => {
	const {
		appTitle,
		attemptToLogUserIn,
		loginForm,
		changeLoginFormField
	} = useContext(AppContext);

	return (
		<div className="page pageLogin">
			<Helmet>
				<title>{appTitle} - Login</title>
			</Helmet>
			<form>
				<fieldset>
					<legend>Please provide your credentials</legend>
					<div className="row">
						<label>Username</label>
						<div>
							<input value={loginForm.fields.username} onChange={(e) => changeLoginFormField('username', e.target.value)} autoFocus type="text" />
						</div>
					</div>

					<div className="row">
						<label>Password</label>
						<div>
							<input value={loginForm.fields.password} onChange={(e) => changeLoginFormField('password', e.target.value)} type="password" />
						</div>
					</div>

					<div className="buttonArea">
						<div className="message"></div>
						<button type="button" onClick={attemptToLogUserIn}>Submit</button>
					</div>
				</fieldset>
			</form>
		</div>
	);
};
