using Application.Interface;
using Application.Models;
using Application.Response;
using Domain.Entities;
using System.Xml.Schema;

namespace Application.UserCase
{
    public class OrderService : IOrderService
    {
        private readonly IOrderCommand _command;
        private readonly IOrderQuery _query;

        public OrderService(IOrderCommand command, IOrderQuery query)
        {
            _command = command;
            _query = query;
        }

        public async Task<Order> CreateOrder(int clientId)
        {
            _query.UpdateStateCart(clientId);
            OrderProductData result = _query.CalculateTotal(clientId);
            var order = new Order
            {
                CartId = result.carId,
                Fecha = DateTime.Now,
                Total=result.total
            };
            await _command.InsertOrder(order);
            return order;
        }
        public async Task<IEnumerable<DataBalanceResponse>> ShowBalance(DateTime from, DateTime to)
        {
            var result = await _query.GetBalance(from, to);
            return result.Select(db=>db);

        }

    }
}