export const productos = [
  // ☕ BEBIDAS → Cafés
  {
    id: 1,
    titulo: "Café Espresso",
    descripcion: "Café intenso, elaborado con granos 100% arábica recién molidos.",
    precio: 1200,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&auto=format&fit=crop&q=60",
    categoria: "Bebidas",
    subcategoria: "Cafés"
  },
  {
    id: 2,
    titulo: "Café Latte",
    descripcion: "Combinación suave de espresso y leche vaporizada, con espuma ligera.",
    precio: 1500,
    cantidad: 1,    
    imagen: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&auto=format&fit=crop&q=60",
    categoria: "Bebidas",
    subcategoria: "Cafés"
  },
  {
    id: 3,
    titulo: "Capuccino Italiano",
    descripcion: "Espresso con leche espumada y un toque de cacao en polvo.",
    precio: 1600,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1525457136159-8878648a7ad3?w=400&auto=format&fit=crop&q=60",
    categoria: "Bebidas",
    subcategoria: "Cafés"
  },
  {
    id: 4,
    titulo: "Café Americano",
    descripcion: "Espresso suave alargado con agua caliente, sabor equilibrado.",
    precio: 1300,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1587731563871-1e7d81e57f04?w=400&auto=format&fit=crop&q=60",
    categoria: "Bebidas",
    subcategoria: "Cafés"
  },

  // 🍵 BEBIDAS → Infusiones
  {
    id: 8,
    titulo: "Té Chai Latte",
    descripcion: "Infusión de té negro con especias y leche vaporizada cremosa.",
    precio: 1400,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1627492431798-5eaaa2b2c6cd?w=400&auto=format&fit=crop&q=60",
    categoria: "Bebidas",
    subcategoria: "Infusiones"
  },
  {
    id: 13,
    titulo: "Chocolate Caliente",
    descripcion: "Bebida espesa con cacao artesanal y un toque de canela.",
    precio: 1600,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1541849546-216549ae2160?w=400&auto=format&fit=crop&q=60",
    categoria: "Bebidas",
    subcategoria: "Infusiones"
  },
  {
    id: 14,
    titulo: "Té Verde con Menta",
    descripcion: "Infusión ligera y refrescante, ideal para después de comer.",
    precio: 1200,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1587731563871-1e7d81e57f04?w=400&auto=format&fit=crop&q=60",
    categoria: "Bebidas",
    subcategoria: "Infusiones"
  },

  // 🧊 BEBIDAS → Licuados
  {
    id: 20,
    titulo: "Licuado de Frutilla y Banana",
    descripcion: "Preparado con frutas naturales y leche entera o vegetal.",
    precio: 1800,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1612197527762-9c74c64f0b46?w=400&auto=format&fit=crop&q=60",
    categoria: "Bebidas",
    subcategoria: "Licuados"
  },
  {
    id: 21,
    titulo: "Smoothie Verde Detox",
    descripcion: "Con espinaca, manzana verde, jengibre y limón.",
    precio: 1900,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1590080875831-cfdb4b3c4b22?w=400&auto=format&fit=crop&q=60",
    categoria: "Bebidas",
    subcategoria: "Licuados"
  },

  // 🍰 COMIDAS → Dulces / Panadería
  {
    id: 6,
    titulo: "Medialunas de Manteca",
    descripcion: "Clásicas medialunas dulces, doradas y glaseadas con almíbar.",
    precio: 900,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=400&auto=format&fit=crop&q=60",
    categoria: "Comidas",
    subcategoria: "Dulces"
  },
  {
    id: 7,
    titulo: "Muffin de Arándanos",
    descripcion: "Esponjoso muffin casero con arándanos frescos y azúcar glas.",
    precio: 1100,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=60",
    categoria: "Comidas",
    subcategoria: "Dulces"
  },
  {
    id: 9,
    titulo: "Croissant de Almendras",
    descripcion: "Relleno con crema de almendras y cubierto con láminas crocantes.",
    precio: 1700,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1617196034796-73a4c9a0f61c?w=400&auto=format&fit=crop&q=60",
    categoria: "Comidas",
    subcategoria: "Dulces"
  },
  {
    id: 12,
    titulo: "Brownie con Nueces",
    descripcion: "Brownie húmedo de chocolate amargo con trozos de nuez.",
    precio: 1300,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1599785209707-28a1a6b1ee4a?w=400&auto=format&fit=crop&q=60",
    categoria: "Comidas",
    subcategoria: "Dulces"
  },

  // 🥪 COMIDAS → Salados
  {
    id: 5,
    titulo: "Tostado de Jamón y Queso",
    descripcion: "Pan de campo crocante con jamón natural y queso fundido.",
    precio: 2200,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1604908177075-33d820e3a8b2?w=400&auto=format&fit=crop&q=60",
    categoria: "Comidas",
    subcategoria: "Salados"
  },
  {
    id: 10,
    titulo: "Bagel de Salmón Ahumado",
    descripcion: "Bagel artesanal con queso crema, salmón ahumado y hojas verdes.",
    precio: 3100,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1606755962773-d324d39f2c5f?w=400&auto=format&fit=crop&q=60",
    categoria: "Comidas",
    subcategoria: "Salados"
  },
  {
    id: 11,
    titulo: "Tarta de Verduras",
    descripcion: "Porción de tarta casera de espinaca y calabaza, masa integral.",
    precio: 2400,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1565958011705-44e2119f3f30?w=400&auto=format&fit=crop&q=60",
    categoria: "Comidas",
    subcategoria: "Salados"
  },

  // 🍽️ ESPECIALES → Combos
  {
    id: 15,
    titulo: "Combo Desayuno Clásico",
    descripcion: "Café con leche + 2 medialunas + jugo de naranja natural.",
    precio: 2500,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&auto=format&fit=crop&q=60",
    categoria: "Especiales",
    subcategoria: "Combos"
  },
  {
    id: 16,
    titulo: "Combo Brunch",
    descripcion: "Tostado + jugo natural + café a elección + mini muffin.",
    precio: 3200,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1543352634-093d9486b8b2?w=400&auto=format&fit=crop&q=60",
    categoria: "Especiales",
    subcategoria: "Combos"
  },

  // 🌾 ESPECIALES → Sin TACC / Veganos
  {
    id: 17,
    titulo: "Brownie sin TACC",
    descripcion: "Brownie de chocolate sin gluten, ideal para acompañar el café.",
    precio: 1500,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1589987683740-119d0b77e9b3?w=400&auto=format&fit=crop&q=60",
    categoria: "Especiales",
    subcategoria: "Sin TACC"
  },
  {
    id: 18,
    titulo: "Muffin Vegano",
    descripcion: "Muffin elaborado sin lácteos ni huevo, con harina integral.",
    precio: 1400,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1608198093002-ad4e005484d8?w=400&auto=format&fit=crop&q=60",
    categoria: "Especiales",
    subcategoria: "Vegano"
  },
  {
    id: 19,
    titulo: "Alfajor de Maicena sin TACC",
    descripcion: "Doble capa de maicena con dulce de leche sin gluten.",
    precio: 1300,
    cantidad: 1,
    imagen: "https://images.unsplash.com/photo-1617196034796-73a4c9a0f61c?w=400&auto=format&fit=crop&q=60",
    categoria: "Especiales",
    subcategoria: "Sin TACC"
  }
];


