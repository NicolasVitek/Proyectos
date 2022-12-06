
using Application.Response;

namespace Application.Interface
{
    public interface ICarQuery
    {
        public Guid GetCarId(int clientId);
    }
}
