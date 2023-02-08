// OBJETO PRODUCTOS
class Producto{
    constructor(modelo, escala, id, precio, descripcion, cantidad){
        this.modelo = modelo;
        this.escala = escala;
        this.id = id;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
}

// AUTOS
const auto_01 = new Producto("BMW M1 GENERACIÓN 1", "ESCALA 1:24", 101, 8000, "WELLY ORIGINAL 1:24 - BMW M1 GENERACIÓN 1, fabricado en metal con partes plásticas, color blanco, se abren las puertas, largo aprox. del auto 18 cm, medidas de la caja : 24 x 13 x 10 cm, peso 550 grs. Artículo nuevo cerrado en embalaje original.", 1)
const auto_02 = new Producto("PORSCHE 911 CARRERA 4S", "ESCALA 1:24", 102, 8000, "WELLY ORIGINAL 1:24 - PORSCHE 911 CARRERA 4S, fabricado en metal con partes plásticas, color amarillo, se abren las puertas, largo aprox. del auto 18 cm, medidas de la caja : 24 x 13 x 10 cm, peso 550 grs. Artículo nuevo cerrado en embalaje original.", 1);
const auto_03 = new Producto("ALFA ROMEO 4C", "ESCALA 1:24", 103, 8000, "WELLY ORIGINAL 1:24 - ALFA ROMEO 4C, fabricado en metal con partes plásticas, color blanco, se abren las puertas, largo aprox. del auto 18 cm, medidas de la caja : 24 x 13 x 10 cm, peso 550 grs. Artículo nuevo cerrado en embalaje original.", 1);
const auto_04 = new Producto("PORSCHE CARRERA GT", "ESCALA 1:24", 104, 8000, "MOTORMAX ORIGINAL 1:24 - PORSCHE CARRERA GT, fabricado en metal con partes plásticas, color negro, se abren las puertas, el capot y el baúl delantero, largo aprox. del auto 18 cm, medidas de la caja : 24 x 13 x 10 cm, peso 550 grs. Artículo nuevo cerrado en embalaje original.", 1);
const auto_05 = new Producto("DODGE VIPER SRT", "ESCALA 1:24", 105, 8000, "BURAGO ORIGINAL 1:24 - DODGE VIPER SRT, fabricado en metal con partes plásticas, color rojo con franja negra, se abren las puertas y el capot, largo aprox. del auto 18 cm, medidas de la caja : 24 x 13 x 10 cm, peso 550 grs. Artículo nuevo cerrado en embalaje original.", 1);
const auto_06 = new Producto("PAGANI HUAYRA BC", "ESCALA 1:24", 106, 10000, "WELLY ORIGINAL 1:24 - PAGANI HUAYRA BC, fabricado en metal con partes plásticas, color rojo, se abren las puertas, largo aprox. del auto 18 cm, medidas de la caja : 24 x 13 x 10 cm, peso 550 grs. Artículo nuevo cerrado en embalaje original.", 1);

// MOTOS
const moto_01 = new Producto("BMW R NINET SCRAMBLER", "ESCALA 1:12", 201, 7000, "MAISTRO ORIGINAL 1:12 - BMW R NINET SCRAMBLER, fabricado en metal con partes plásticas, color gris, largo aprox. 13 cm, medidas de la caja : 21 x 12 x 7 cm, peso 450 grs. Artículo nuevo cerrado en embalaje original.", 1);
const moto_02 = new Producto("KTM 1290 SUPER DUKE R", "ESCALA 1:12", 202, 7000, "MAISTRO ORIGINAL 1:12 - KTM 1290 SUPER DUKE R, fabricado en metal con partes plásticas, color naranja, largo aprox. 13 cm, medidas de la caja : 21 x 12 x 7 cm, peso 450 grs. Artículo nuevo cerrado en embalaje original.", 1);
const moto_03 = new Producto("KAWASAKI Z900 RS", "ESCALA 1:12", 203, 7000, "MAISTRO ORIGINAL 1:12 - KAWASAKI Z900 RS, fabricado en metal con partes plásticas, color negro, largo aprox. 13 cm, medidas de la caja : 21 x 12 x 7 cm, peso 450 grs. Artículo nuevo cerrado en embalaje original.", 1);
const moto_04 = new Producto("SUZUKI GSX-R600", "ESCALA 1:12", 204, 7000, "MAISTRO ORIGINAL 1:12 - SUZUKI GSX-R600, fabricado en metal con partes plásticas, color naranja, largo aprox. 13 cm, medidas de la caja : 21 x 12 x 7 cm, peso 450 grs. Artículo nuevo cerrado en embalaje original.", 1);
const moto_05 = new Producto("YAMAHA YZF-R1", "ESCALA 1:12", 205, 7000, "MAISTRO ORIGINAL 1:12 - YAMAHA YZF-R1, fabricado en metal con partes plásticas, color azul, largo aprox. 13 cm, medidas de la caja : 21 x 12 x 7 cm, peso 450 grs. Artículo nuevo cerrado en embalaje original.", 1);
const moto_06 = new Producto("HONDA CBR1000RR", "ESCALA 1:12", 206, 7000, "NEWRAY ORIGINAL 1:12 - HONDA CBR1000RR, fabricado en metal con partes plásticas, color blanco con diseño deportivo, largo aprox. 13 cm, medidas de la caja : 21 x 12 x 7 cm, peso 450 grs. Artículo nuevo cerrado en embalaje original.", 1);

// COLECCIONES
const colec_01 = new Producto("TRILOGÍA DE VOLVER AL FUTURO", "ESCALA 1:24", 301, 30000, "WELLY ORIGINAL 1:24 - TRILOGÍA DE VOLVER AL FUTURO, fabricado en metal con partes plásticas, color gris, largo aprox. 18 cm, medidas de la caja : 36 x 22 x 20 cm, peso 1300 grs. Artículo nuevo cerrado en embalaje original.", 1);
const colec_02 = new Producto("HOT WHEELS DE BATMAN", "ESCALA 1:64", 302, 20000, "HOT WHEELS ORIGINAL 1:64 - HOT WHEELS DE BATMAN, fabricado en metal con partes plásticas, color gris, largo aprox. 8 cm, medidas de la caja : 10,5 x 16,5 cm, peso 500 grs. Artículo nuevo cerrado en embalaje original.", 1);
const colec_03 = new Producto("HOT WHEELS BATIMOVIL", "ESCALA 1:64", 303, 18000, "HOT WHEELS ORIGINAL 1:64 - HOT WHEELS BATIMOVIL, fabricado en metal con partes plásticas, color negro, largo aprox. 8 cm, medidas de la caja : 35 x 36 x 10 cm, peso 800 grs. Artículo nuevo cerrado en embalaje original.", 1);
const colec_04 = new Producto("MOTOS DE LEYENDA", "ESCALA 1:18", 304, 25000, "APRILIA ORIGINAL 1:18 - MOTOS DE LEYENDA, fabricado en metal con partes plásticas, colores varios, largo aprox. 16 cm, medidas de la caja : 35 x 40 x 10 cm, peso 1000 grs. Artículo nuevo cerrado en embalaje original.", 1);
const colec_05 = new Producto("DEPORTIVOS DE LEYENDA", "ESCALA 1:38", 305, 23000, "WELLY ORIGINAL 1:38 - DEPORTIVOS DE LEYENDA, fabricado en plástico, colores varios, largo aprox. 12 cm, medidas de la caja :  20,5 x 27,5 cm, peso 900 grs. Artículo nuevo cerrado en embalaje original.", 1);
const colec_06 = new Producto("AUTOS CLASICOS", "ESCALA 1:38", 306, 18000, "WELLY ORIGINAL 1:38 - AUTOS CLASICOS, fabricado en plástico, colores varios, largo aprox. 12 cm, medidas de la caja : 20,5 x 27,5 cm, peso 900 grs. Artículo nuevo cerrado en embalaje original.", 1);