using Domain.Entities;

namespace Application.Interface
{
    public interface IClientCommand
    {
        Task InsertClient(Cliente cliente);
    }
}
