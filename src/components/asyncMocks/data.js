const productos = [{
    
    id: "1",
    stock: 10,
    precio: 499.99,
    nombre: "iphone 14 Pro",
    categorias : "Celulares",
    descripcion:
      "Smartphone de ún con pantalla OLED y cámara de alta resolución.",
    imagen: "https://imgs.search.brave.com/E7K_jkAkkiLohhhQtZruWeCyZph5__m-tTUl3qlfanw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFMbUw5NFBVdlMu/anBn",
  },
  {
    id: "2",
    stock: 5,
    precio: 1299.99,
    nombre: "iphone 11 Pro",
    categorias : "Celulares",
    descripcion:
      "Portátil ultradelcidad y tarjeta gráfica dedicada.",
      imagen: "https://imgs.search.brave.com/E7K_jkAkkiLohhhQtZruWeCyZph5__m-tTUl3qlfanw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFMbUw5NFBVdlMu/anBn",
  },
  {
    id: "3",
    stock: 3,
    precio: 249.99,
    nombre: "iphone 4 Pro",
    categorias : "Celulares",
    descripcion:
      "Auriculares inalámbricos  y batería de larga duración.",
      imagen: "https://imgs.search.brave.com/E7K_jkAkkiLohhhQtZruWeCyZph5__m-tTUl3qlfanw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFMbUw5NFBVdlMu/anBn",
  },
  {
    id: "4",
    stock: 8,
    precio: 899.99,
    nombre: "iphone 2 Pro",
    categorias : "Computadoras",
    descripcion:
      "Televisor de alta defis y tecnología Smart TV.",
    imagen: "https://imgs.search.brave.com/LYB7htdetyVNV-re7aM_X3IcAghLUtd6ZWr6k_YlTB8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFQMjV3UWQ0OUwu/anBn",
  },
  {
    id: "5",
    stock: 15,
    precio: 79.99,
    nombre: "Mac",
    categorias : "Computadoras",
    descripcion:
      "Altavoz Bluetooth resistente al  calidad.",
    imagen: "https://imgs.search.brave.com/LYB7htdetyVNV-re7aM_X3IcAghLUtd6ZWr6k_YlTB8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFQMjV3UWQ0OUwu/anBn",
  },
  {
    id: "6",
    stock: 20,
    precio: 179.99,
    nombre: "Mac 2",
    categorias : "Computadoras",
    descripcion:
      "Cámara digital comde video en 4K.",
    imagen: "https://imgs.search.brave.com/LYB7htdetyVNV-re7aM_X3IcAghLUtd6ZWr6k_YlTB8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFQMjV3UWQ0OUwu/anBn",
  },
  {
    id: "7",
    stock: 12,
    precio: 149.99,
    nombre: "wilson",
    categorias : "Computadoras",
    descripcion:
      "Tablet con pantalla táctil de o ampliable.",
    imagen: "https://imgs.search.brave.com/aAtsD-wvOxaG8TFX6vNUGRDy9ipZQngTp4KMsOiWCaE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE2eHZqcUxodEwu/anBn",
  },
  {
    id: "8",
    stock: 6,
    precio: 349.99,
    nombre: "iphone5",
    categorias : "Computadoras",
    descripcion:
      "Monitor cuencia de actualización de 144Hz.",
    imagen: "https://imgs.search.brave.com/aAtsD-wvOxaG8TFX6vNUGRDy9ipZQngTp4KMsOiWCaE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE2eHZqcUxodEwu/anBn",
  },
  {
    id: "9",
    stock: 8,
    precio: 59.99,
    nombre: "ip6ro",
    categorias : "Computadoras",
    descripcion:
      "Ratón ergonómico inalálta precisión.",
    imagen: "https://imgs.search.brave.com/aAtsD-wvOxaG8TFX6vNUGRDy9ipZQngTp4KMsOiWCaE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE2eHZqcUxodEwu/anBn",
  },
  {
    id: "10",
    stock: 9,
    precio: 39.99,
    nombre: "ip7ro",
    categorias : "Accesorios",
    descripcion:
      "Teclado mecánico retroiluminado coosamuñecas.",
    imagen: "https://imgs.search.brave.com/ALr9CGusvYC6tZ_xd33S5FmKNh8S643EezkFgN5ZQXc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE1T3k2eGY1dUwu/anBn",
  },
  {
    id: "11",
    stock: 9,
    precio: 39.99,
    nombre: "i8o",
    categorias : "Accesorios",
    descripcion:
      "Teclado mes programables y reposamuñecas.",
    imagen: "https://imgs.search.brave.com/ALr9CGusvYC6tZ_xd33S5FmKNh8S643EezkFgN5ZQXc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE1T3k2eGY1dUwu/anBn",
  },
  {
    id: "12",
    stock: 9,
    precio: 39.99,
    nombre: "ip0Pro",
    categorias : "Accesorios",
    descripcion:
      "Teclado mecánico retsamuñecas.",
    imagen: "https://imgs.search.brave.com/ALr9CGusvYC6tZ_xd33S5FmKNh8S643EezkFgN5ZQXc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTE1T3k2eGY1dUwu/anBn",
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