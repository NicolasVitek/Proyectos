using Application.Interface;
using Domain.Entities;
using Infraesctructure.Persistence;

namespace Infraesctructure.Command
{
    public class OrderCommand: IOrderCommand
    {
        private readonly AppDbContext _context;

        public OrderCommand(AppDbContext context)
        {
            _context = context;
        }
        public async Task InsertOrder(Order order)
        {
        var client = await _context.Cart.FindAsync(order.CartId);
         if (client == null)
        {
        throw new Exception("Cliente no encontrado.");
        }
    // Asignar la entidad relacionada
        order.Cart = client;

        _context.Add(order);
        await _context.SaveChangesAsync();
        }
    }
}