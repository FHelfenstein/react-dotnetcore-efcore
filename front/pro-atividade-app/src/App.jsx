import './App.css';
import {Route, Routes} from "react-router-dom";
import Atividade from './pages/atividades/Atividade'
import Cliente from './pages/clientes/Cliente';
import Dashboard from './pages/dashboard/Dashboard';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from './pages/PageNotFound';

 const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/atividade/*' element={<Atividade/>}/>
        <Route path='/atividade/lista' element={<Atividade/>}/>        
        <Route path='/cliente/*' element={<Cliente/>}/>
        <Route path='/cliente/lista' element={<Cliente/>}/>
        <Route path='/cliente/:id/atividade' element={<Atividade/>}/>
        <Route path='/cliente/detalhe' element={<ClienteForm/>}/>
        <Route path='/cliente/detalhe/:id' element={<ClienteForm/>}/>
        <Route element={<PageNotFound/>}/>
      </Routes>
    </>          
  );
}

export default App;

