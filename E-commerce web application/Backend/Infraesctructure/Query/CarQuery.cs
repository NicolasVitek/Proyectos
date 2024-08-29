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
            var query = from c in _context.Cart
                        where c.ClientId == clientId && c.Status == true
                        select c.CartId;
            var list = query.ToList();
            return list.First();
        }
    }
}
