import { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import { CarReception } from './CarReception';

export const CarReceptionContainer = () => {
	const [carWork, setCarWork] = useState({});
	const [carWorks, setCarWorks] = useState([]);
	const submitFunction = data => {
		setCarWork(data);

		Swal.fire({
			title: '¿Quiere recibir este trabajo?',
			text: `
			Cliente: ${data.cliente} -
			Fecha de ingreso: ${data.fechaDeIngreso} -
			Fecha de entrega: ${data.fechaDeEntrega} -
			Trabajo 1: ${data.trabajo1} - ${data.importe1} -
			Trabajo 2: ${data.trabajo2 || 'no corresponde'} - ${data.importe2} - 
			Trabajo 3: ${data.trabajo3 || 'no corresponde'} - ${data.importe3} -
			Importe Total: ${data.importeTotal} -
			Observaciones: ${data.observaciones} -
			Presupuesto: ${data.presupuesto}

			`,
			showDenyButton: true,
			confirmButtonText: 'Recibir',
			denyButtonText: `Cancelar`,
		}).then(result => {
			if (result.isConfirmed) {
				setCarWorks([...carWorks, carWork]);
				Array.from(document.querySelectorAll('input')).forEach(input => (input.value = ''));
				Swal.fire('Trabajo recibido', '', 'success');
			} else if (result.isDenied) {
				Swal.fire('Cancelado', '', 'info');
			}
		});
	};

	const { handleChange, handleSubmit, errors } = useFormik({
		initialValues: {
			fechaDeIngreso: '',
			cliente: '',
			trabajo1: '',
			importe1: '',
			trabajo2: '',
			importe2: '',
			trabajo3: '',
			importe3: '',
			importeTotal: '',
			observaciones: '',
			fechaDeEntrega: '',
			presupuesto: '',
		},
		onSubmit: submitFunction,
		validationSchema: Yup.object().shape({
			fechaDeIngreso: Yup.date().required('Este campo es obligatorio'),
			cliente: Yup.string()
				.min(5, 'El domicilio debe tener al menos 5 caracteres')
				.required('Este campo es obligatorio'),
			importeTotal: Yup.number().required('Este campo es obligatorio'),
			fechaDeEntrega: Yup.date().required('Este campo es obligatorio'),
			presupuesto: Yup.string().required('Este campo es obligatorio'),
		}),
		validateOnChange: false,
	});

	return <CarReception handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} />;
};
