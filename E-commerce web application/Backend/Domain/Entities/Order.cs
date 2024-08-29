using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Order
    {
        [Column("orderId")]
        public Guid OrderId { get; set; }
        public Guid CartId { get; set; }
        [Column("date")]
        public DateTime Date { get; set; }
        [Column("total")]
        public double Total { get; set; }
        public Cart? Cart { get; set; }
    }
}