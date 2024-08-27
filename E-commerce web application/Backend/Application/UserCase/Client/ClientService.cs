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
                Nombre = request.name,
                Apellido = request.lastName,
                Direccion = request.address,
                DNI = request.dni,
                Telefono = request.phoneNumber
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
                name = client.Nombre,
                lastname = client.Apellido,
                dni = client.DNI,
                phoneNumber = client.Telefono,
                address = client.Direccion
            });
        }
    }
}