import React from 'react';
import {Route, Routes} from 'react-router-dom';
import "./App.css";

import { Layout } from './components/Layout';
import {Homepage, Createpost, Getpost, Updatepost, Updatefieldpost, Deletepost, Notfoundpage} from './pages';


function App() {
	return (
   <>
	<Routes>
		<Route path="/" element={<Layout/>}>
		<Route index element={<Homepage/>}/>
		<Route path="/newpost" element={<Createpost/>}/>
		<Route path="/getpost" element={<Getpost/>}/>
		<Route path="/updatepost" element={<Updatepost/>}/>
		<Route path="/updatefieldpost" element={<Updatefieldpost/>}/>
		<Route path="/deletepost" element={<Deletepost/>}/>
		<Route path="*" element={<Notfoundpage/>}/>
		</Route>
	</Routes>
	</>
	);
}



export default App;
