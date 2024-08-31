using Application.Interface;
using Infraesctructure.Persistence;

namespace Infraesctructure.Query
{
    public class CartQuery : ICartQuery
    {
        private readonly AppDbContext _context;

        public CartQuery(AppDbContext context)
        {
            _context = context;
        }

        public Guid GetCartId(int clientId)
        {
            return _context.Cart
                           .Where(c => c.ClientId == clientId && c.Status)
                           .Select(c => c.CartId)
                           .FirstOrDefault();
        }
    }
}
