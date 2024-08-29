using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class Client
    {
        [Column("clientId")]
        public int ClientId { get; set; }
        [Column("dni")]
        public int DNI { get; set; }
        [Column("firstName")]
        public string FirstName { get; set; }
        [Column("lastName")]
        public string LastName { get; set; }
        [Column("address")]
        public string Address { get; set; }
        [Column("phoneNumber")]
        public string PhoneNumber { get; set; }
        public ICollection<Cart> Cart { get; set; }
        public Client() { }
        public Client(int dni, string nombre, string apellido, string direccion, string telefono)
        {
            DNI = dni;
            FirstName = nombre;
            LastName = apellido;
            Address = direccion;
            PhoneNumber = telefono;
        }
    }
}
