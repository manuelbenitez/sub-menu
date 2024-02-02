import { useState } from "react";
import "./App.css";
import {
  selectedOneCompra,
  subMenuAyuda,
  subMenuCompra,
  subMenuDescubrir,
} from "./submenus.constants";

function App() {
  const [isComprarOpen, setIsComprarOpen] = useState<boolean>(false);
  const [isDescubrirOpen, setIsDescubrirOpen] = useState<boolean>(false);
  const [isAyudaOpen, setIsAyudaOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");

  const handleMenuClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    switch (e.currentTarget.id) {
      case "comprar":
        setIsComprarOpen(true);
        setIsDescubrirOpen(false);
        setIsAyudaOpen(false);
        setSelected("");
        break;
      case "descubrir":
        setIsComprarOpen(false);
        setIsDescubrirOpen(true);
        setIsAyudaOpen(false);
        setSelected("");
        break;
      case "ayuda":
        setIsComprarOpen(false);
        setIsDescubrirOpen(false);
        setIsAyudaOpen(true);
        setSelected("");
        break;
    }
  };

  const handleSubmenuClick = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    setSelected(e.currentTarget.id);
  };

  return (
    <div>
      <button id="comprar" onClick={(e) => handleMenuClick(e)}>
        Comprar
      </button>
      <button id="descubrir" onClick={(e) => handleMenuClick(e)}>
        Descubrir
      </button>
      <button id="ayuda" onClick={(e) => handleMenuClick(e)}>
        Ayuda
      </button>
      <div className="row">
        {isComprarOpen && (
          <>
            <div>
              {subMenuCompra.map((item, index) => (
                <h1
                  id={item.id}
                  onClick={(e) => handleSubmenuClick(e)}
                  key={index}
                >
                  {item.texto}
                </h1>
              ))}
            </div>
            {selected === "1" && (
              <div className="col">
                {selectedOneCompra.map((item) => (
                  <a
                    key={item.href}
                    href={`https://lego.com/${item.href}`}
                    target="_blank"
                  >
                    {item.texto}
                  </a>
                ))}
              </div>
            )}
            {selected === "2" && <h1>Selected 2</h1>}
            {selected === "3" && <h1>Selected 3</h1>}
            {selected === "4" && <h1>Selected 4</h1>}
            {selected === "5" && <h1>Selected 5</h1>}
            {selected === "6" && <h1>Selected 6</h1>}
          </>
        )}
        {isDescubrirOpen && (
          <>
            {" "}
            <div>
              {subMenuDescubrir.map((item, index) => (
                <h1
                  id={item.id}
                  onClick={(e) => handleSubmenuClick(e)}
                  key={index}
                >
                  {item.texto}
                </h1>
              ))}
            </div>
            {selected === "1" && <h1>Selected 1</h1>}
            {selected === "2" && <h1>Selected 2</h1>}
            {selected === "3" && <h1>Selected 3</h1>}
            {selected === "4" && <h1>Selected 4</h1>}
            {selected === "5" && <h1>Selected 5</h1>}
            {selected === "6" && <h1>Selected 6</h1>}
          </>
        )}
        {isAyudaOpen && (
          <>
            <div>
              {subMenuAyuda.map((item, index) => (
                <h1
                  id={item.id}
                  onClick={(e) => handleSubmenuClick(e)}
                  key={index}
                >
                  {item.texto}
                </h1>
              ))}
            </div>
            {selected === "1" && <h1>Selected 1</h1>}
            {selected === "2" && <h1>Selected 2</h1>}
            {selected === "3" && <h1>Selected 3</h1>}
            {selected === "4" && <h1>Selected 4</h1>}
            {selected === "5" && <h1>Selected 5</h1>}
            {selected === "6" && <h1>Selected 6</h1>}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
