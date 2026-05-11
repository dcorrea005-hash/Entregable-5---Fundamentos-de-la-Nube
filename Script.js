// DATOS DEL MENÚ
const menuItems = [

/* Entradas y sopas*/
{ 
    id: 1, 
    name: "Sopa de Lima Yucateca", 
    category: "entradas y sopas", 
    price: "$95 MXN", 
    image: "IMG/Entrada1.jpg", 
    description: "Caldo de pollo con lima, tortilla crujiente y especias suaves."
},
{ 
    id: 2, 
    name: "Queso Fundido con Chorizo", 
    category: "entradas y sopas", 
    price: "$120 MXN", 
    image: "IMG/Entrada2.jpg", 
    description: "Queso derretido con chorizo artesanal, acompañado de tortillas hechas a mano."
},
{   
    id: 3, 
    name: "Esquites Tradicionales", 
    category: "entradas y sopas", 
    price: "$75 MXN", 
    image: "IMG/Entrada3.jpg", 
    description: "Elote en vaso con mayonesa, queso, chile y un toque de limón."
},

/* Platos fuertes y especialidades */
{ 
    id: 4, 
    name: "Mole Negro Oaxaqueño con Pollo", 
    category: "platos fuertes y especialidades", 
    price: "$220 MXN", 
    image: "IMG/Plato1.jpg", 
    description: "Receta tradicional con cacao y chiles secos, servido con arroz y tortillas recién hechas."
},
{ 
    id: 5, 
    name: "Tacos de Cochinita Pibil", 
    category: "platos fuertes y especialidades", 
    price: "$145 MXN (3 pzas.)", 
    image: "IMG/Plato2.jpg", 
    description: "Cerdo marinado en achiote y naranja agria, servido en tortillas azules con cebolla morada encurtida."
},
{ 
    id: 6, 
    name: "Tlayuda con Tasajo", 
    category: "platos fuertes y especialidades", 
    price: "$180 MXN", 
    image: "IMG/Plato3.jpg", 
    description: "Tortilla crujiente con frijoles, queso de hebra, tasajo y vegetales frescos."
},

/* Postres */
{ 
    id: 7, 
    name: "Tamal de Elote Dulce", 
    category: "postres", 
    price: "$65 MXN", 
    image: "IMG/Postre1.jpg", 
    description: "Esponjoso y suave, acompañado de crema fresca y canela."
},
{ 
    id: 8, 
    name: "Flan de Cajeta", 
    category: "postres", 
    price: "$70 MXN", 
    image: "IMG/Postre2.jpg", 
    description: "Cremoso y con caramelo de leche de cabra."
},
{ 
    id: 9, 
    name: "Buñuelos de Viento", 
    category: "postres", 
    price: "$60 MXN", 
    image: "IMG/Postre3.jpg", 
    description: "Crujientes y espolvoreados con azúcar y canela."
},

/* Bebidas */
{ 
    id: 10, 
    name: "Agua de Jamaica con Especias", 
    category: "bebidas", 
    price: "$45 MXN", 
    image: "IMG/Bebida1.jpg", 
    description: "Refrescante, con un ligero toque de canela."
},
{ 
    id: 11, 
    name: "Atole de Vainilla", 
    category: "bebidas", 
    price: "$50 MXN", 
    image: "IMG/Bebida2.jpg", 
    description: "Espeso, caliente y aromático."
},
{ 
    id: 12, 
    name: "Café de Olla", 
    category: "bebidas", 
    price: "$55 MXN", 
    image: "IMG/Bebida3.jpg", 
    description: "Tradicional con piloncillo y canela, servido en jarrito de barro."
},
{ 
    id: 13, 
    name: "Mezcal Margarita", 
    category: "bebidas", 
    price: "$120 MXN", 
    image: "IMG/Bebida4.jpg", 
    description: "Clásica margarita mexicana con un toque de mezcal ahumado, jugo de limón fresco y sal de gusano en el borde."
},
{ 
    id: 14, 
    name: "Carajillo de Café de Olla", 
    category: "bebidas", 
    price: "$110 MXN", 
    image: "IMG/Bebida5.jpg", 
    description: "icor 43 mezclado con café de olla, con notas de piloncillo y canela."
}, 
{ 
    id: 15, 
    name: "Michelada Artesanal", 
    category: "bebidas", 
    price: "$95 MXN", 
    image: "IMG/Bebida6.jpg", 
    description: "Cerveza mexicana servida con jugo de limón, salsas tradicionales, escarchado de chile en polvo y un toque de chamoy."
},
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});