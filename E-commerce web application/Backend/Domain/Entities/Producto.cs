namespace Domain.Entities
{
    public class Producto
    {
        public int ProductoId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Marca { get; set; }
        public string Codigo { get; set; }
        public double Precio { get; set; }
        public string Image { get; set; }
        public ICollection<CarritoProducto> CarritoProducto { get; set; }
    }
}

