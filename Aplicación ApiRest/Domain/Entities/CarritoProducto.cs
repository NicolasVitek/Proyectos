﻿namespace Domain.Entities
{
    public class CarritoProducto
    {
        public Guid CarritoId { get; set; }
        public int ProductoId { get; set; }
        public int Cantidad { get; set; }
        public Carrito Carrito { get; set; }
        public Producto Producto { get; set; }
    }
}
