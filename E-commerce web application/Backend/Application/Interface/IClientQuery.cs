using Domain.Entities;

namespace Application.Interface
{
    public interface IClientQuery
    {
        public Cliente GetClient(int id);
        bool DniValidation(int dni);
    }
}
