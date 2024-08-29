using Application.Interface;
using Application.Models;
using Application.Response;
using Domain.Entities;

namespace Application.UserCase
{
    public class ClientService : IClientService
    {
        private readonly IClientCommand _command;
        private readonly IClientQuery _query;
        public ClientService(IClientCommand command, IClientQuery query)
        {
            _command = command;
            _query = query;
        }

        public async Task<Client> CreateClient(CreateClientRequest request)
        {
            var client = new Client
            {
                FirstName = request.name,
                LastName = request.lastName,
                Address = request.address,
                DNI = request.dni,
                PhoneNumber = request.phoneNumber
            };
            await _command.InsertClient(client);
            return client;
        }

        public bool DniValidation(int dni)
        {
            return _query.DniValidation(dni);
        }

        public Task<ClientResponse> GetAll(int id)
        {
            var client = _query.GetClient(id);
            return Task.FromResult(new ClientResponse
            {
                name = client.FirstName,
                lastname = client.LastName,
                dni = client.DNI,
                phoneNumber = client.PhoneNumber,
                address = client.Address
            });
        }
    }
}