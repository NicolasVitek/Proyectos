namespace Application.Models
{
    public class CreateClientRequest
    {
        public int dni { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
        public string address { get; set; }
        public string phoneNumber { get; set; }
    }
}
