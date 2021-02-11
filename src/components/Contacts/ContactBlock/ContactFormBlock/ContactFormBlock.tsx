import React from 'react';
import s from './ContactFormBlock.module.scss';
import {useFormik} from 'formik';
import axios from 'axios';
import {log} from 'util';

type FormikErrorType = {
	name?: string
	email?: string
	message?: string
}

export const ContactFormBlock = () => {


	return (
		<div className={s.contactBox}>
			<div>
				<h3>FEEL FREE TO DROP ME A LINE</h3>
				<p>If you have any suggestion, project or even you want to say Hello.. Please fill out the form below and I will
					reply you shortly.</p>
			</div>
			<ContactForm/>
		</div>
	)
}


export const ContactForm = () => {


	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validate: (values) => {
			const errors: FormikErrorType = {};

			// if (!values.name) {
			// 	errors.name = 'Required';
			// }

			if (!values.email) {
				errors.email = 'Required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address';
			}

			if (!values.message) {
				errors.message = 'Required';
			} else if (values.message.length < 5) {
				errors.message = 'Why so short message?';
			}

			return errors;
		},
		onSubmit: values => {
			console.log(JSON.stringify(values));
			axios.post('https://smpt-server-nodejs.herokuapp.com/sendMessage', {values })
			formik.resetForm()
		},
	});


	return (
		<form onSubmit={formik.handleSubmit}>
			<div className={s.formBox}>
				<label htmlFor="name">Your Name</label>
				<input
					id='name'
					{...formik.getFieldProps('name')}
				/>
				{formik.errors.name && formik.touched.name ? <div className={s.formError}>{formik.errors.name}</div> : null}

				<label htmlFor="email">Email Address</label>
				<input
					id='email'
					{...formik.getFieldProps('email')}
				/>
				{formik.errors.email && formik.touched.email ? <div className={s.formError}>{formik.errors.email}</div> : null}

				<label htmlFor="message">Your Message</label>
				<input
					id='message'
					{...formik.getFieldProps('message')}
				/>
				{formik.errors.message && formik.touched.message ? <div className={s.formError}>{formik.errors.message}</div> : null}

				<button type="submit">Send</button>
			</div>
		</form>
	);
}