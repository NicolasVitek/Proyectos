using Application.Response;
using Domain.Entities;

namespace Application.Interface
{
    public interface IOrderService
    {
        public Task<Orden> CreateOrder(int clientId);
        public Task<IEnumerable<DataBalanceResponse>> ShowBalance(DateTime from, DateTime to);

    }
}
