using Domain.Entities;

namespace Application.Interface
{
    public interface IClientQuery
    {
        public Client GetClient(int id);
        bool DniValidation(int dni);
    }
}
