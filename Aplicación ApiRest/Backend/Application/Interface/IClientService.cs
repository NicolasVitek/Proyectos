
using Application.Models;
using Application.Response;
using Domain.Entities;

namespace Application.Interface
{
    public interface IClientService
    {
        Task<Cliente> CreateClient(CreateClientRequest request);
        Task<ClientResponse> GetAll(int id);
        public bool DniValidation(int dni);
    }
}
