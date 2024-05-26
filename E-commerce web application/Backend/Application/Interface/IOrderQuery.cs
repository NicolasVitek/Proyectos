
using Application.Response;
using Application.UserCase.Order;

namespace Application.Interface
{
    public interface IOrderQuery
    {
        public void UpdateStateCar(int clientId);
        public OrderProductData CalculateTotal(int clientId);
        public Task<List<DataBalanceResponse>> GetBalance(DateTime from, DateTime to);
    }
}
