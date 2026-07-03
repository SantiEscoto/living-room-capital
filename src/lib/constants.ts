export const BUSINESS = {
  name: "Living Room Capital",
  slogan: "Calidad | Estilo | Vanguardia",
  tagline: "Fábrica propia de muebles en Mercado CREA, Tlalpan",
  phone: "55 7313 8982",
  whatsapp: "+5215585370697",
  whatsappDisplay: "+52 1 55 8537 0697",
  email: "livingroomcapital@hotmail.com",
  facebook: "https://www.facebook.com/people/Living-Room-Capital/100063508091602/",
  construex:
    "https://www.construex.com.mx/exhibidores/living_room_capital/productos",
  hours: "Lunes a Domingo: 10:00 AM - 6:00 PM",
  address:
    "Local 102, Mercado Vasco de Quiroga, Av. Insurgentes Sur s/n, Tlalpan, 14000 CDMX",
  googleRating: 4.9,
  googleReviews: 8,
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.276123456789!2d-99.1838201!3d19.2949621!2m3!1f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01f559348ae1%3A0xab3ba137175ff1bc!2sLiving%20Room%20Capital!5e0!3m2!1ses!4mx!4v1719940000000!5m2!1sen!2smx",
  mapLink:
    "https://maps.google.com/?q=Living+Room+Capital+Mercado+Vasco+de+Quiroga+Tlalpan",
  whatsappUrl: "https://wa.me/5215585370697",
} as const;

export const PRODUCT_PRICE = "Cotiza por WhatsApp";

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/ar", label: "Realidad Aumentada" },
  { href: "/personalizar", label: "Personalizar" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const CATEGORIES = [
  "Todos",
  "Salas",
  "Sillones",
  "Futones",
  "Reclinables",
  "Sofás Cama",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Product {
  id: string;
  name: string;
  category: Exclude<Category, "Todos">;
  description: string;
  price: string;
  image: string;
  featured?: boolean;
  realPhoto?: boolean;
  modelUrl?: string;
  facebookPostUrl?: string;
  construexUrl?: string;
  seedLikes?: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "sala-esquinera-modular",
    name: "Sala Esquinera Modular",
    category: "Salas",
    description:
      "Sala esquinera modular de fábrica propia. Configuración flexible para espacios amplios. Tapizado premium y estructura reforzada.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    featured: true,
    modelUrl: "/models/sala.glb",
  },
  {
    id: "sala-lineal-contemporanea",
    name: "Sala Lineal Contemporánea",
    category: "Salas",
    description:
      "Diseño minimalista con líneas limpias. Ideal para departamentos en CDMX. Fabricación a medida disponible.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
    featured: true,
  },
  {
    id: "sillon-ejecutivo",
    name: "Sillón Ejecutivo Tapizado",
    category: "Sillones",
    description:
      "Sillón individual con respaldo alto y acabados de primera. Perfecto para sala o estudio.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    featured: true,
  },
  {
    id: "sillon-club",
    name: "Sillón Club Clásico",
    category: "Sillones",
    description:
      "Sillón club con brazos amplios y confort excepcional. Disponible en múltiples telas y colores.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    id: "futon-convertible",
    name: "Futón Convertible",
    category: "Futones",
    description:
      "Futón versátil que se adapta a cualquier espacio. Estructura sólida y colchoneta de alta densidad.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
  },
  {
    id: "futon-moderno",
    name: "Futón Moderno 3 Posiciones",
    category: "Futones",
    description:
      "Tres posiciones de reclinado. Ideal para espacios compactos en Tlalpan y zona sur de CDMX.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
  },
  {
    id: "reclinable-electrico",
    name: "Reclinable Eléctrico Premium",
    category: "Reclinables",
    description:
      "Reclinable con mecanismo eléctrico suave. Máximo confort para tu sala de estar.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
    featured: true,
  },
  {
    id: "reclinable-manual",
    name: "Reclinable Manual Clásico",
    category: "Reclinables",
    description:
      "Reclinable manual con palanca lateral. Diseño ergonómico y tapizado resistente.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    id: "sofa-cama-plegable",
    name: "Sofá Cama Plegable",
    category: "Sofás Cama",
    description:
      "Sofá cama de apertura rápida. Colchón integrado de espuma de alta densidad.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    id: "sofa-cama-esquinero",
    name: "Sofá Cama Esquinero",
    category: "Sofás Cama",
    description:
      "Maximiza tu espacio con este sofá cama esquinero. Fabricación directa de fábrica.",
    price: PRODUCT_PRICE,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  // Productos reales — catálogo Living Room Capital en Construex
  {
    id: "construex-s",
    name: "Muebles S México",
    category: "Salas",
    description:
      "Sala de fábrica propia Living Room Capital. Tapizado premium, fabricación en Mercado CREA, Tlalpan.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-s.jpg",
    featured: true,
    realPhoto: true,
    modelUrl: "/models/sala.glb",
    seedLikes: 45,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_s_mexico",
  },
  {
    id: "construex-q",
    name: "Muebles Q México",
    category: "Salas",
    description:
      "Mueble de sala de estar de fábrica propia. Diseño y calidad Living Room Capital.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-q.jpg",
    featured: true,
    realPhoto: true,
    modelUrl: "/models/sala.glb",
    seedLikes: 42,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_q_mexico",
  },
  {
    id: "construex-e",
    name: "Muebles E México",
    category: "Salas",
    description:
      "Sala modular fabricada en CDMX. Precios directos de fábrica en Tlalpan.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-e.jpg",
    featured: true,
    realPhoto: true,
    modelUrl: "/models/sala.glb",
    seedLikes: 40,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_e_mexico",
  },
  {
    id: "construex-x",
    name: "Muebles X México",
    category: "Sillones",
    description:
      "Sillón tapizado de fábrica propia. Disponible en múltiples telas y colores.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-x.jpg",
    realPhoto: true,
    modelUrl: "/models/sillon.glb",
    seedLikes: 38,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_x_mexico_",
  },
  {
    id: "construex-w",
    name: "Muebles W México",
    category: "Reclinables",
    description:
      "Reclinable de fábrica con acabados de primera. Visítanos en Local 102, Mercado CREA.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-w.jpg",
    realPhoto: true,
    seedLikes: 36,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_w_mexico",
  },
  {
    id: "construex-f",
    name: "Muebles F México",
    category: "Futones",
    description:
      "Futón versátil de fabricación propia. Ideal para espacios compactos en CDMX.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-f.jpg",
    realPhoto: true,
    seedLikes: 34,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_f_mexico",
  },
  {
    id: "construex-t",
    name: "Muebles T México",
    category: "Sofás Cama",
    description:
      "Sofá cama de fábrica propia. Maximiza tu espacio sin sacrificar confort.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-t.jpg",
    realPhoto: true,
    seedLikes: 33,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_t_mexico",
  },
  {
    id: "construex-a",
    name: "Muebles A México",
    category: "Sillones",
    description:
      "Sillón clásico con acabados de primera calidad. Fabricación directa en Tlalpan.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-a.jpg",
    realPhoto: true,
    modelUrl: "/models/sillon.glb",
    seedLikes: 31,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_a_mexico",
  },
  {
    id: "construex-d",
    name: "Muebles D México",
    category: "Salas",
    description:
      "Sala esquinera fabricada a medida. Colores y telas personalizables.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-d.jpg",
    realPhoto: true,
    modelUrl: "/models/sala.glb",
    seedLikes: 29,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_d_mexico",
  },
  {
    id: "construex-y",
    name: "Muebles Y México",
    category: "Sillones",
    description:
      "Sillón de diseño contemporáneo. Fábrica propia Living Room Capital.",
    price: PRODUCT_PRICE,
    image: "/images/catalog/construex-y.jpg",
    realPhoto: true,
    modelUrl: "/models/sillon.glb",
    seedLikes: 27,
    construexUrl:
      "https://www.construex.com.mx/exhibidores/living_room_capital/producto/muebles_y_mexico",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    author: "Rosely Olivera",
    rating: 5,
    text: "Tienen muebles de muy buena calidad y muy bonitos, así como de buen precio, altamente recomendable.",
  },
  {
    id: 2,
    author: "J Tov",
    rating: 5,
    text: "Super pacientes y muy dispuestos a ayudarte a obtener lo que necesitas, mi sillón hermoso.",
  },
  {
    id: 3,
    author: "Bruno Diaz de Leon",
    rating: 5,
    text: "El servicio es excelente y los diseños y calidad de los muebles son increíbles.",
  },
  {
    id: 4,
    author: "Gabriela Caballero",
    rating: 5,
    text: "Todo es muy bueno y de buena calidad, la atención es excelente.",
  },
] as const;

export const FURNITURE_TYPES = [
  "Sala",
  "Sillón",
  "Futón",
  "Reclinable",
  "Sofá Cama",
  "Mueble Ocasional",
] as const;

export const MATERIALS = [
  "Madera",
  "MDF Premium",
  "Metal",
  "Madera + Metal",
] as const;

export const FABRICS = [
  "Lino",
  "Microfibra",
  "Piel Sintética",
  "Terciopelo",
  "Algodón",
  "Cuero Genuino",
] as const;

export const COLORS = [
  { name: "Gris", hex: "#6b7280" },
  { name: "Beige", hex: "#d4c4a8" },
  { name: "Azul Marino", hex: "#1e3a5f" },
  { name: "Verde Oliva", hex: "#556b2f" },
  { name: "Terracota", hex: "#c2703e" },
  { name: "Blanco", hex: "#f5f5f5" },
  { name: "Azul Eléctrico", hex: "#3B82F6" },
] as const;

export const AR_MODELS = [
  {
    id: "sala-demo",
    name: "Sala Demo",
    description:
      "Sofá de cuero con acabados sheen — visualízalo en tu sala antes de comprar.",
    src: "/models/sala.glb",
    cameraOrbit: "0deg 70deg 120%",
  },
  {
    id: "sillon-demo",
    name: "Sillón Demo",
    description:
      "Sillón tapizado con tela sheen — pruébalo en realidad aumentada en tu espacio.",
    src: "/models/sillon.glb",
    cameraOrbit: "0deg 75deg 90%",
  },
] as const;

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
