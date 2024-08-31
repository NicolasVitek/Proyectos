namespace Application.UserCase
{
    public class OrderProductData
    {
        public Guid CartId{ get; set; }= Guid.NewGuid();
        public int Amount{ get; set; }
        public double Price{ get; set; }
        public double Total{ get; set; }
    }
}
