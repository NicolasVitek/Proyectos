
using Application.Response;

namespace Application.Interface
{
    public interface ICartQuery
    {
        public Guid GetCartId(int clientId);
    }
}
