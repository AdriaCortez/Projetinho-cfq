
//VOu comentar algumas coisas pra não me perder e não fazer tudo mal feito

function Nav(){

return(<div className="navbar">
  <div className="flex">/
    <a className="btn">botao</a>
  </div>
  <div className="flex-none">
    <ul className="menu">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
) 
}

function Cabecalho() {
  return (
    <div id="busca">
      <input type="text" id="busca2" placeholder="Search..." />
    </div>
  );
}

//Esses aqui vão renderizar na tela. 

const rootElement = document.getElementById('rootElement'); //Renderiza o cabeçalho
const navElement = document.getElementById('navElement'); //renderiza o menu

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<Cabecalho />);
}


if (navElement) {   
 ReactDOM.createRoot(navElement).render(<Nav />);
}