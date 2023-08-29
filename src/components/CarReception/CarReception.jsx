import { Button, TextField } from '@mui/material';
import styles from './CarReception.module.css';
import { DatePicker } from '@mui/x-date-pickers';
export const CarReception = (handleChange, handleSubmit, errors) => {
	return (
		<>
			<h2 style={{ margin: '20px auto', textAlign: 'center' }}>Recepción de un automóvil</h2>
			<form className={styles.FormContainer} onSubmit={handleSubmit}>
				<DatePicker
					name='fecha'
					id='outlined-basic'
					label='Fecha'
					variant='outlined'
					format='DD/MM/YYYY'
					// onChange={handleChange}
					// error={errors.nombre ? true : false}
					// helperText={errors.nombre} />
				/>
				<TextField
					name='cliente'
					id='outlined-basic'
					label='Cliente'
					variant='outlined'
					// onChange={handleChange}
					// error={errors.email ? true : false}
					// helperText={errors.email}
				/>
				<TextField
					name='trabajos'
					id='outlined-basic'
					label='Trabajos a realizar'
					variant='outlined'
					multiline
					// onChange={handleChange}
					// error={errors.telefono ? true : false}
					// helperText={errors.telefono}
				/>
				<TextField
					name='importe-individual'
					id='outlined-basic'
					label='Importe por trabajo'
					variant='outlined'
					type='number'
					// onChange={handleChange}
					// error={errors.telefono ? true : false}
					// helperText={errors.telefono}
				/>
				<TextField
					name='importe-total'
					id='outlined-basic'
					label='Importe total'
					variant='outlined'
					type='number'
					// onChange={handleChange}
					// error={errors.telefono ? true : false}
					// helperText={errors.telefono}
				/>
				<TextField
					name='observaciones'
					id='outlined-basic'
					label='Observaciones'
					variant='outlined'
					multiline
					// onChange={handleChange}
					// error={errors.telefono ? true : false}
					// helperText={errors.telefono}
				/>
				<DatePicker
					name='fecha'
					id='outlined-basic'
					label='Fecha'
					variant='outlined'
					format='DD/MM/YYYY'
					// onChange={handleChange}
					// error={errors.nombre ? true : false}
					// helperText={errors.nombre} />
				/>
				<TextField
					name='presupuesto'
					id='outlined-basic'
					label='Presupuesto'
					variant='outlined'
					multiline
					// onChange={handleChange}
					// error={errors.telefono ? true : false}
					// helperText={errors.telefono}
				/>
				<Button variant='contained' type='submit'>
					Ingresar
				</Button>
			</form>
		</>
	);
};
