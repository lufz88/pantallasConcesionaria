import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import { ClientRegistration } from './ClientRegistration';

export const ClientRegistrationContainer = () => {
	const [client, setClient] = useState({});
	const [clients, setClients] = useState([]);
	const submitFunction = data => {
		setClient(data);
		Swal.fire({
			title: '¿Quiere dar de alta a este usuario?',
			text: `
			Nombre: ${data.nombre} -
			Domicilio: ${data.domicilio} -
			Tipo: ${data.tipo} -
			Usuario: ${data.usuario}
			`,
			showDenyButton: true,
			confirmButtonText: 'Dar de alta',
			denyButtonText: `Cancelar`,
		}).then(result => {
			if (result.isConfirmed) {
				setClients([...clients, client]);
				Array.from(document.querySelectorAll('input')).forEach(input => (input.value = ''));
				Swal.fire('Cliente dado de alta', '', 'success');
			} else if (result.isDenied) {
				Swal.fire('Cancelado', '', 'info');
			}
		});
	};

	const { handleChange, handleSubmit, errors } = useFormik({
		initialValues: {
			nombre: '',
			domicilio: '',
			usuario: '',
			clave: '',
		},
		onSubmit: submitFunction,
		validationSchema: Yup.object().shape({
			nombre: Yup.string()
				.required('Este campo es obligatorio')
				.min(3, 'El nombre debe tener al menos 3 caracteres'),
			domicilio: Yup.string()
				.min(5, 'El domicilio debe tener al menos 5 caracteres')
				.required('Este campo es obligatorio'),
			tipo: Yup.string().required('Este campo es obligatorio'),
			usuario: Yup.string()
				.required('Este campo es obligatorio')
				.min(3, 'El usuario debe tener al menos 8 números'),
			clave: Yup.string()
				.required('Este campo es obligatorio')
				.min(8, 'La clave debe tener al menos 8 números'),
		}),
		validateOnChange: false,
	});

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(show => !show);

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	return (
		<ClientRegistration
			handleChange={handleChange}
			handleSubmit={handleSubmit}
			errors={errors}
			showPassword={showPassword}
			handleClickShowPassword={handleClickShowPassword}
			handleMouseDownPassword={handleMouseDownPassword}
		/>
	);
};
