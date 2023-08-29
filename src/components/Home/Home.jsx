import { NavLink } from 'react-router-dom';

export const Home = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '4px', margin: '24px' }}>
			<h1>Pantallas</h1>
			<NavLink to='/client-registration'>Alta de clientes</NavLink>
			<NavLink to='/car-reception'>Recepción de Automóvil</NavLink>
		</div>
	);
};
