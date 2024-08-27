
namespace Application.Models
{
    public class ProductCartRequest
    {
        public int clientID { get; set; }
        public int productId { get; set; }
        public int amount { get; set; }
    }
}
