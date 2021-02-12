import React from 'react';
import s from './ContactFormBlock.module.scss';
import {useFormik} from 'formik';
import {formAPI} from '../../../../dal/api';

type FormikErrorType = {
	name?: string
	email?: string
	message?: string
}

export const ContactFormBlock = () => {

	return (
		<div className={s.contactBox}>
			<div>
				<h3 className={s.formTitle}>FEEL FREE TO DROP ME A LINE</h3>
				<p className={s.formText}>If you have any suggestion, project or even you want to say Hello.. Please fill out the form below and I will
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
		onSubmit: async values => {
			console.log(JSON.stringify(values));
			// const {name, email, message} = values;
			// debugger
			// axios.post('https://smpt-server-nodejs.herokuapp.com/sendMessage', {
			// // axios.post('http://localhost:3010/sendMessage', {
			// 	name,
			// 	email,
			// 	message
			// }).then(res => {
			// 		console.log(res)
			// 	})
			// 	.catch(err => {
			// 		console.log(err)
			// 	})
			const res = await formAPI.sendMessage(values)
			console.log(res)

			formik.resetForm()
		},
	});


	return (
		<form onSubmit={formik.handleSubmit}>
			<div className={s.formBox}>
				<div className={s.group}>
					<input type="text" required className={s.input} {...formik.getFieldProps('name')}/>
					<span className={s.highlight}></span>
					<span className={s.bar}></span>
					<label className={s.label}>Your Name</label>
					{formik.errors.name && formik.touched.name ? <div className={s.formError}>{formik.errors.name}</div> : null}
				</div>


				<div className={s.group}>
					<input type="text" required className={s.input} {...formik.getFieldProps('email')}/>
					<span className={s.highlight}></span>
					<span className={s.bar}></span>
					<label className={s.label}>Email Address</label>
					{formik.errors.email && formik.touched.email ?
						<div className={s.formError}>{formik.errors.email}</div> : null}
				</div>


				<div className={s.group}>
					<input type="text" required className={s.input} {...formik.getFieldProps('message')}/>
					<span className={s.highlight}></span>
					<span className={s.bar}></span>
					<label className={s.label}>Your Message</label>
					{formik.errors.message && formik.touched.message ?
						<div className={s.formError}>{formik.errors.message}</div> : null}
				</div>


				<button type="submit" className={s.formBtn}>Send Message</button>
			</div>
		</form>
	);
}