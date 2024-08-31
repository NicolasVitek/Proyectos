namespace Application.Response
{
    public class ProductCartResponse
    {
        public Guid CartId { get; set; }
        public int ProductId { get; set; }
        public int Amount { get; set; }
    }
}
