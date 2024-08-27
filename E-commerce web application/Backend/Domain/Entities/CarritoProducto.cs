namespace Domain.Entities
{
    public class ProductCart
    {
        public Guid CartId { get; set; }
        public int ProductId { get; set; }
        public int Cantidad { get; set; }
        public Cart? Cart { get; set; }
        public Product? Product { get; set; }
    }
}
