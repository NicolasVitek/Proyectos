namespace Domain.Entities
{
    public class Cart
    {
        public Cart(int clientId, bool estado)
        {
            ClientId = clientId;
            Estado = estado;
        }

        public Guid CartId { get; set; }
        public int ClientId { get; set; }
        public bool Estado { get; set; }
        public Client Client { get; set; }
        public Order Order { get; set; }
        public ICollection<ProductCart> ProductCart { get; set; }
    }
}
