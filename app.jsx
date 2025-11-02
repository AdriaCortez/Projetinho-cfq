//VOu comentar algumas coisas pra não me perder e não fazer tudo mal feito

function Nav() {
  return (
    <div className="navbar">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={-1}
          role="button"
          className="btn btn-ghost rounded-field"
        >
          . . .
        </div>
        <ul
          tabIndex="-1"
          className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
        >
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Soft Skills</a>
          </li>
          <li>
            <a href="#">Hard Skills</a>
          </li>
          <li>
            <a href="#">Enterprises</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Let me impress you</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Cabecalho() {
  return (
    <div id="busca">
      <input type="text" id="busca2" placeholder="Search..." />
    </div>
  );
}

//Esses aqui vão renderizar na tela.

const rootElement = document.getElementById("rootElement"); //Renderiza o cabeçalho
const navElement = document.getElementById("navElement"); //renderiza o menu

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<Cabecalho />);
}

if (navElement) {
  ReactDOM.createRoot(navElement).render(<Nav />);
}
