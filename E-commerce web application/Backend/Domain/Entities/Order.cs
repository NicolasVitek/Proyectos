namespace Domain.Entities
{
    public class Order
    {
        public Guid OrderId { get; set; }
        public Guid CartId { get; set; }
        public DateTime Fecha { get; set; }
        public double Total { get; set; }
        public Cart? Cart { get; set; }
    }
}