const productos = [{
    
    id: "1",
    stock: 10,
    precio: 499.99,
    nombre: "iphone 14 Pro",
    categorias : "Celulares",
    descripcion:
      "Smartphone de última generación con pantalla OLED y cámara de alta resolución.",
    imagen: "https://img.freepik.com/vector-gratis/dispositivo-telefono-inteligente-realista_52683-29765.jpg?w=740&t=st=1689949177~exp=1689949777~hmac=829bfa9f7eed08e2390e1b2a161c6266c41a0aae57e58f680859edcb5504a0d2",
  },
  {
    id: "2",
    stock: 5,
    precio: 1299.99,
    nombre: "iphone 14 Pro",
    categorias : "Celulares",
    descripcion:
      "Portátil ultradelgado con procesador de alta velocidad y tarjeta gráfica dedicada.",
    imagen: "https://img.freepik.com/vector-gratis/dispositivo-telefono-inteligente-realista_52683-29765.jpg?w=740&t=st=1689949177~exp=1689949777~hmac=829bfa9f7eed08e2390e1b2a161c6266c41a0aae57e58f680859edcb5504a0d2",
  },
  {
    id: "3",
    stock: 3,
    precio: 249.99,
    nombre: "iphone 14 Pro",
    categorias : "Celulares",
    descripcion:
      "Auriculares inalámbricos con cancelación de ruido y batería de larga duración.",
    imagen: "https://img.freepik.com/vector-gratis/dispositivo-telefono-inteligente-realista_52683-29765.jpg?w=740&t=st=1689949177~exp=1689949777~hmac=829bfa9f7eed08e2390e1b2a161c6266c41a0aae57e58f680859edcb5504a0d2",
  },
  {
    id: "4",
    stock: 8,
    precio: 899.99,
    nombre: "iphone 14 Pro",
    categorias : "Computadoras",
    descripcion:
      "Televisor de alta definición con pantalla de 55 pulgadas y tecnología Smart TV.",
    imagen: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg",
  },
  {
    id: "5",
    stock: 15,
    precio: 79.99,
    nombre: "iphone 14 Pro",
    categorias : "Computadoras",
    descripcion:
      "Altavoz Bluetooth resistente al agua y con sonido de alta calidad.",
    imagen: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg",
  },
  {
    id: "6",
    stock: 20,
    precio: 179.99,
    nombre: "iphone 14 Pro",
    categorias : "Computadoras",
    descripcion:
      "Cámara digital compacta con zoom óptico y grabación de video en 4K.",
    imagen: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg",
  },
  {
    id: "7",
    stock: 12,
    precio: 149.99,
    nombre: "iphone 14 Pro",
    categorias : "Computadoras",
    descripcion:
      "Tablet con pantalla táctil de 10 pulgadas y almacenamiento ampliable.",
    imagen: "https://img.global.news.samsung.com/mx/wp-content/uploads/2022/02/Odyssey-Neo-G9_2.jpg",
  },
  {
    id: "8",
    stock: 6,
    precio: 349.99,
    nombre: "iphone 14 Pro",
    categorias : "Computadoras",
    descripcion:
      "Monitor curvo de alta resolución con frecuencia de actualización de 144Hz.",
    imagen: "https://img.global.news.samsung.com/mx/wp-content/uploads/2022/02/Odyssey-Neo-G9_2.jpg",
  },
  {
    id: "9",
    stock: 8,
    precio: 59.99,
    nombre: "iphone 14 Pro",
    categorias : "Computadoras",
    descripcion:
      "Ratón ergonómico inalámbrico con sensor óptico de alta precisión.",
    imagen: "https://img.global.news.samsung.com/mx/wp-content/uploads/2022/02/Odyssey-Neo-G9_2.jpg",
  },
  {
    id: "10",
    stock: 4,
    precio: 699.99,
    nombre: "iphone 14 Pro",
    categorias : "Consolas",
    descripcion:
      "Consola de videojuegos con capacidad de reproducción en 4K y control inalámbrico.",
    imagen: "https://static.hendel.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/4/5/45505dig-min.jpg",
  },
  {
    id: "11",
    stock: 9,
    precio: 39.99,
    nombre: "iphone 14 Pro",
    categorias : "Consolas",
    descripcion:
      "Teclado mecánico retroiluminado con teclas programables y reposamuñecas.",
    imagen: "https://static.hendel.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/4/5/45505dig-min.jpg",
  },
  {
    id: "12",
    stock: 7,
    precio: 199.99,
    nombre: "iphone 14 Pro",
    categorias : "Consolas",
    descripcion:
      "Impresora multifuncional con conectividad Wi-Fi y alimentador automático de documentos.",
    imagen: "https://static.hendel.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/4/5/45505dig-min.jpg",
  },
];

export function obtenerCategoriasUnicas(productos) {
  const categorias = new Set();
  productos.forEach((producto) => {
    categorias.add(producto.categorias);
  });
  return Array.from(categorias);
}

export function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
}

export function getProductosByCategoria(categoriaId) {
  return new Promise((resolve) => {
    const filteredProducts = categoriaId
      ? productos.filter((producto) => producto.categorias === categoriaId)
      : productos;
    setTimeout(() => {
      resolve(filteredProducts);
    }, 500);
  });
}

export function getProductosById(itemId) {
  return new Promise((resolve) => {
    const productRequested = productos.find(
      (item) => item.id.toLowerCase() === itemId.toLowerCase()
    );

    setTimeout(() => {
      resolve(productRequested);
    }, 500);
  });}