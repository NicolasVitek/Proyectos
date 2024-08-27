namespace Domain.Entities
{
    public class Client
    {
        public int ClientId { get; set; }
        public int DNI { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public ICollection<Cart> Cart { get; set; }
        public Client() { }
        public Client(int dNI, string nombre, string apellido, string direccion, string telefono)
        {
            DNI = dNI;
            Nombre = nombre;
            Apellido = apellido;
            Direccion = direccion;
            Telefono = telefono;
        }
    }
}
