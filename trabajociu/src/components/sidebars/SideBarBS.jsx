import React, { useState } from "react";
import Pills from "../Pills/Pills";
import { Link } from "react-router-dom";

export default function SideBarBS({ filtrosActivos, setFiltrosActivos }) {
  const [open, setOpen] = useState({ Bebidas: true, Comidas: false, Especiales: false });

  const categorias = {
    Bebidas: ["Cafés", "Infusiones", "Licuados"],
    Comidas: ["Dulces", "Salados"],
    Especiales: ["Combos", "Sin TACC"],
  };

  const toggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFiltro = (sub) => {
    setFiltrosActivos((prev) =>
      prev.includes(sub) ? prev.filter((item) => item !== sub) : [...prev, sub]
    );
  };

  return (
    <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
      <div className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
        <svg className="bi pe-none me-2" width="30" height="24" aria-hidden="true">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-5 fw-semibold ms-2">Menú</span>
      </div>

      {/* Pastillas de filtros activos */}
      {filtrosActivos.map((f) => (
        <Pills key={f} text={f} onRemove={() => toggleFiltro(f)} />
      ))}

      {/* Categorías colapsables */}
      <ul className="list-unstyled ps-0">
        {Object.entries(categorias).map(([categoria, subcategorias]) => (
          <li key={categoria} className="mb-1">
            <button
              className={`btn btn-toggle d-inline-flex align-items-center rounded border-0 ${open[categoria] ? '' : 'collapsed'}`}
              onClick={() => toggle(categoria)}
              aria-expanded={open[categoria]}
            >
              {/* Icono de flechita */}
              <svg
                className={`bi me-2 flex-shrink-0`}
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                style={{ transition: "transform 0.2s", transform: open[categoria] ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                <path fillRule="evenodd" d="M6 12l6-4-6-4v8z" />
              </svg>
              {categoria}
            </button>
            <div className={`collapse${open[categoria] ? " show" : ""}`}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {subcategorias.map((sub) => (
                  <li key={sub} className="ms-3">
                    <Link
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      onClick={() => toggleFiltro(sub)}
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

