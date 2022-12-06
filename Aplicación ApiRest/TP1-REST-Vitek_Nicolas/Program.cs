using Application.Interface;
using Application.UserCase.Car;
using Application.UserCase.Client;
using Application.UserCase.Product;
using Application.UserCase.Order;
using Infraesctructure.Command;
using Infraesctructure.Persistence;
using Infraesctructure.Query;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var conectionString = builder.Configuration["ConectionString"];
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(conectionString));
builder.Services.AddScoped<IClientService, ClientService>();
builder.Services.AddScoped<IClientCommand, ClientCommand>();
builder.Services.AddScoped<IClientQuery, ClientQuery>();

builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IProductQuery, ProductQuery>();

builder.Services.AddScoped<ICarService, CarService>();
builder.Services.AddScoped<ICarQuery, CarQuery>();
builder.Services.AddScoped<IProductCarCommand, ProductCarCommand>();
builder.Services.AddScoped<IProductCarQuery, ProductCarQuery>();

builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IOrderCommand, OrderCommand>();
builder.Services.AddScoped<IOrderQuery, OrderQuery>();
builder.Services.AddControllers().AddJsonOptions(x =>
   x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve);

builder.Services.AddCors(options =>
{
    options.AddPolicy(
                      name: "politica",
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5500")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
});
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

}
app.UseHttpsRedirection();
app.UseCors("politica");
app.UseAuthorization();
app.MapControllers();
app.Run();
