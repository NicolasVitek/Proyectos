﻿namespace Domain.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public string? Nombre { get; set; }
        public string? Descripcion { get; set; }
        public string? Marca { get; set; }
        public string? Codigo { get; set; }
        public double Precio { get; set; }
        public string? Image { get; set; }
        public ICollection<ProductCart>? ProductCart { get; set; }
    }
}

