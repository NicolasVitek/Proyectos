﻿
namespace Application.UserCase.Product
{
    public class ProductData
    {
        public ProductData() { }
        public ProductData(int id, int cantidad, double precio)
        {
            Id = id;
            Cantidad = cantidad;
            Precio = precio;
        }

        public int Id { get; set; }
        public int Cantidad { get; set; }
        public double Precio { get; set; }
    }
}
