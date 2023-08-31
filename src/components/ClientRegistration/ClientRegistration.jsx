import PropTypes from 'prop-types';
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	TextField,
} from '@mui/material';
import styles from './ClientRegistration.module.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export const ClientRegistration = ({
	handleChange,
	handleSubmit,
	errors,
	showPassword,
	handleClickShowPassword,
	handleMouseDownPassword,
}) => {
	ClientRegistration.propTypes = {
		handleChange: PropTypes.func,
		handleSubmit: PropTypes.func,
		errors: PropTypes.object,
		showPassword: PropTypes.func,
		handleClickShowPassword: PropTypes.func,
		handleMouseDownPassword: PropTypes.func,
	};

	return (
		<>
			<Button variant='contained'>
				<NavLink to='/'>Home</NavLink>
			</Button>
			<h2 style={{ margin: '20px auto', textAlign: 'center' }}>Alta de Clientes</h2>
			<form className={styles.FormContainer} onSubmit={handleSubmit}>
				<TextField
					name='nombre'
					label='Nombre y apellido'
					variant='outlined'
					onChange={handleChange}
					error={errors.nombre ? true : false}
					helperText={errors.nombre}
				/>
				<TextField
					name='domicilio'
					label='Domicilio'
					variant='outlined'
					onChange={handleChange}
					error={errors.domicilio ? true : false}
					helperText={errors.domicilio}
				/>
				<FormControl>
					<InputLabel>Tipo</InputLabel>
					<Select
						name='tipo'
						label='Tipo'
						variant='outlined'
						defaultValue=''
						onChange={handleChange}
						error={errors.tipo ? true : false}
						helpertext={errors.domicilio}>
						<MenuItem value='Particular'> Particular</MenuItem>
						<MenuItem value='Empresa'> Empresa</MenuItem>
					</Select>
				</FormControl>

				<TextField
					name='usuario'
					label='Usuario'
					variant='outlined'
					onChange={handleChange}
					error={errors.usuario ? true : false}
					helperText={errors.usuario}
				/>

				<FormControl variant='outlined'>
					<InputLabel>Clave</InputLabel>
					<OutlinedInput
						name='clave'
						id='password'
						type={showPassword ? 'text' : 'password'}
						onChange={handleChange}
						error={errors.clave ? true : false}
						helperText={errors.clave}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
						label='Clave'
					/>
				</FormControl>

				<Button variant='contained' type='submit'>
					Ingresar
				</Button>
			</form>
		</>
	);
};
