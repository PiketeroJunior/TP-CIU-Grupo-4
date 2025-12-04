const BASE_URL = import.meta?.env?.VITE_API_URL || 'http://localhost:8080';

function checkOk(res) {
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

/**
 * Mapea ProductoDTO (API) -> modelo usado en el front (nombre -> titulo)
 */
export function mapearProductoDTO(dto) {
  return {
    id: dto.id,
    titulo: dto.nombre ?? dto.titulo,
    descripcion: dto.descripcion,
    categoria: dto.categoria,
    precio: dto.precio,
    imagen: dto.imagen,
    stock: dto.cantidad,
    subcategoria: dto.subcategoria,
  };
}

export function mapearProductosDTO(lista) {
  if (!Array.isArray(lista)) return [];
  return lista.map(mapearProductoDTO);
}

async function httpJson(url, options) {
  const res = await fetch(url, options);
  return checkOk(res);
}

// GET /api/productos
export async function getProductos() {
  const data = await httpJson(`${BASE_URL}/api/productos`);
  return mapearProductosDTO(data);
}

// GET /api/productos/categoria/{cat}
export async function getProductosPorCategoria(cat) {
  const data = await httpJson(`${BASE_URL}/api/productos/categoria/${encodeURIComponent(cat)}`);
  return mapearProductosDTO(data);
}

// POST /api/ventas
export async function crearVenta(venta) {
  return httpJson(`${BASE_URL}/api/ventas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(venta),
  });
}
