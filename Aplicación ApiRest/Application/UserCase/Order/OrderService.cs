using Application.Interface;
using Application.Models;
using Application.Response;
using Domain.Entities;
using System.Xml.Schema;

namespace Application.UserCase.Order
{
    public class OrderService:IOrderService
    {
        private readonly IOrderCommand _command;
        private readonly IOrderQuery _query;

        public OrderService(IOrderCommand command, IOrderQuery query)
        {
            _command = command;
            _query = query;
        }

        public async Task<Orden> CreateOrder(int clientId)
        {
            _query.UpdateStateCar(clientId);
            OrderProductData result = _query.CalculateTotal(clientId);
            var order = new Orden
            {
                CarritoId = result.carId,
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