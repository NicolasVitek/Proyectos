﻿using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Cart
    {
        [Column("cartId")]
        public Guid CartId { get; set; }= Guid.NewGuid();
        [Column("clientId")]
        public int ClientId { get; set; }
        [Column("status")]
        public bool Status { get; set; }
        public Client? Client { get; set; }
        public Order? Order { get; set; }
        public ICollection<ProductCart>? ProductCart { get; set; }
        public Cart(int clientId, bool status)
        {
            ClientId = clientId;
            Status = status;
        }
        public Cart(){}
    }
}
