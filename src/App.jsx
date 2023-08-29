import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { CarReceptionContainer } from './components/CarReception/CarReceptionContainer';
import { ClientRegistrationContainer } from './components/ClientRegistration/ClientRegistrationContainer';
import { HomeContainer } from './components/Home/HomeContainer';

import './App.css';
function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomeContainer />} />
					<Route path='/car-reception' element={<CarReceptionContainer />} />
					<Route path='/client-registration' element={<ClientRegistrationContainer />} />
				</Routes>
			</BrowserRouter>
		</LocalizationProvider>
	);
}

export default App;
