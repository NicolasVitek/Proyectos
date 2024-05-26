using Domain.Entities;

namespace Application.Interface
{
    public interface IOrderCommand
    {
        public Task InsertOrder(Orden order);
    }
}
