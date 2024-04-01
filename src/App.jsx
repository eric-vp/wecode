import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Categorias from './components/Categorias/Categorias';
import Navegacao from './components/Navegacao/Navegacao';
import Produtos from './components/Produtos/Produtos';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0);

  const notify = () => toast('Adicionado ao carrinho', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  return (
    <>
      <Header count={count}/>
      <Banner/>
      <Categorias/>
      <Navegacao/>
      <Produtos count={count} setCount={setCount} notify={notify} />
      <Blog/>
      <Footer/>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

        style={{ width: "90vw" }}
      />
    </>
  );
}

export default App;
