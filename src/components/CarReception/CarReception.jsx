import PropTypes from 'prop-types';

import { Button, Grid, TextField, Typography } from '@mui/material';
import styles from './CarReception.module.css';
export const CarReception = ({ handleChange, handleSubmit, errors }) => {
	CarReception.propTypes = {
		handleChange: PropTypes.func,
		handleSubmit: PropTypes.func,
		errors: PropTypes.object,
	};

	return (
		<>
			<h2 style={{ margin: '20px auto', textAlign: 'center' }}>Recepción de un automóvil</h2>
			<form className={styles.FormContainer} onSubmit={handleSubmit}>
				<TextField
					name='fechaDeIngreso'
					label='Fecha de Ingreso'
					variant='outlined'
					format='DD/MM/YYYY'
					type='date'
					InputLabelProps={{
						shrink: true,
					}}
					onChange={handleChange}
					error={errors.fechaDeIngreso ? true : false}
					helperText={errors.fechaDeIngreso}
				/>
				<TextField
					name='cliente'
					label='Cliente'
					variant='outlined'
					onChange={handleChange}
					error={errors.cliente ? true : false}
					helperText={errors.cliente}
				/>
				<Typography style={{ textAlign: 'center' }}>Trabajos a realizar</Typography>
				<Grid id='container-trabajos' container rowSpacing={'8px'}>
					<Grid item xs={6}>
						<TextField
							name='trabajo1'
							label='Trabajo 1'
							variant='outlined'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							name='importe1'
							label='Importe'
							variant='outlined'
							type='number'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							name='trabajo2'
							label='Trabajo 2'
							variant='outlined'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							name='importe2'
							label='Importe'
							variant='outlined'
							type='number'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							name='trabajo3'
							label='Trabajo 3'
							variant='outlined'
							onChange={handleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							name='importe3'
							label='Importe'
							variant='outlined'
							type='number'
							onChange={handleChange}
						/>
					</Grid>
				</Grid>

				<TextField
					name='importeTotal'
					label='Importe total'
					variant='outlined'
					type='number'
					onChange={handleChange}
					// error={errors.importeTotal ? true : false}
					// helperText={errors.importeTotal}
				/>
				<TextField
					name='observaciones'
					label='Observaciones'
					variant='outlined'
					onChange={handleChange}
				/>
				<TextField
					name='fechaDeEntrega'
					label='Fecha de Entrega'
					variant='outlined'
					format='DD/MM/YYYY'
					type='date'
					InputLabelProps={{
						shrink: true,
					}}
					onChange={handleChange}
					error={errors.fechaDeEntrega ? true : false}
					helperText={errors.fechaDeEntrega}
				/>
				<TextField
					name='presupuesto'
					label='Presupuesto'
					variant='outlined'
					onChange={handleChange}
					error={errors.presupuesto ? true : false}
					helperText={errors.presupuesto}
				/>
				<Button variant='contained' type='submit'>
					Ingresar
				</Button>
			</form>
		</>
	);
};
