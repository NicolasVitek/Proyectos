using Application.Response;
using Application.UserCase;

namespace Application.Interface
{
    public interface IOrderQuery
    {
        public void UpdateStateCart(int clientId);
        public OrderProductData CalculateTotal(int clientId);
        public Task<List<DataBalanceResponse>> GetBalance(DateTime from, DateTime to);
    }
}
