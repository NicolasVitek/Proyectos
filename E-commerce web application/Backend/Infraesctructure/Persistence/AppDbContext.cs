using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infraesctructure.Persistence
{
    public class AppDbContext: DbContext
    {
        public DbSet<Client> Client { get; set; }
        public DbSet<Cart> Cart { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<ProductCart> ProductCart { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>(entity =>
            {
                entity.ToTable("Client");
                entity.HasKey(c => c.ClientId);
                entity.Property(t => t.DNI).HasColumnType("nvarchar(10)");
                entity.Property(t => t.Nombre).HasColumnType("nvarchar(25)");
                entity.Property(t => t.Apellido).HasColumnType("nvarchar(25)");
                entity.Property(t => t.Direccion).HasColumnType("TEXT");
                entity.Property(t => t.Telefono).HasColumnType("nvarchar(13)");
                entity.Property(t => t.ClientId).ValueGeneratedOnAdd();
                entity.HasData(
                    new Client
                    {
                        ClientId = 1,
                        Nombre = "Nicolas",
                        Apellido = "Vitek",
                        DNI = 23344312,
                        Direccion = "Bynnon 2331",
                        Telefono = "4234-1231"
                    });
                entity
                .HasMany<Cart>(cl => cl.Cart)
                .WithOne(c => c.Client);

            });
            modelBuilder.Entity<Product>().HasData(
            new
            {
                ProductId = 1,
                Nombre = "Alfajor",
                Descripcion = "40 grm",
                Marca = "Sol Serrano",
                Codigo = "a-043",
                Precio = 37.99,
                Image = "Http://static.cotodigital3.com.ar/sitios/fotos/full/00523500/00523588.jpg?3.0.138f",
            },
            new
            {
                ProductId = 2,
                Nombre = "Yerba mate",
                Descripcion = "Edicion 1950, 1 kgrm",
                Marca = "Amanda",
                Codigo = "a-099",
                Precio = 543.33,
                Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00510600/00510606.jpg?3.0.138f",
            },
            new
            {
                ProductId = 3,
                Nombre = "Pure de tomate",
                Descripcion = "520 grm",
                Marca = "Corper",
                Codigo = "a-007",
                Precio = 95.40,
                Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00263300/00263369.jpg?3.0.138f",
            },
            new
            {
                ProductId = 4,
                Nombre = "Cafe molido",
                Descripcion = "20 grm",
                Marca = "La Virginia",
                Codigo = "a-211",
                Precio = 388.15,
                Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00230100/00230124.jpg?3.0.138f",
            },
            new
            {
                ProductId = 5,
                Nombre = "Arvejas",
                Descripcion = "Bajo en sodio, 340 grm",
                Marca = "Doña Pupa",
                Codigo = "a-055",
                Precio = 65.39,
                Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00537400/00537472.jpg?3.0.138f",
            },
            new
            {
                ProductId = 6,
                Nombre = "Agua mineral",
                Descripcion = "Sin gas, 2.5 lt",
                Marca = "Bonaqua",
                Codigo = "b-013",
                Precio = 91.71,
                Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00289600/00289636.jpg?3.0.138f",
            },
            new
            {
                ProductId = 7,
                Nombre = "Gaseosa",
                Descripcion = "Light, 2 lt",
                Marca = "Coca-Cola",
                Codigo = "b-020",
                Precio = 134.55,
                Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00189500/00189594.jpg?3.0.138f",
            },
            new
            {
                ProductId = 8,
                Nombre = "Leche",
                Descripcion = "Entera, sache 1 lt",
                Marca = "La Serenisima",
                Codigo = "f-103",
                Precio = 183.25,
                Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00170500/00170599.jpg?3.0.138f",
            },
            new
            {
                ProductId = 9,
                Nombre = "Cookie Sandwich",
                Descripcion = "Caja 160 grm",
                Marca = "Fudy",
                Codigo = "c-017",
                Precio = 259.00,
                Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00499100/00499140.jpg?3.0.138f",
            },
            new
            {
                ProductId = 10,
                Nombre = "Pañuelos",
                Descripcion = "Doble hoja, caja 100u",
                Marca = "Elite",
                Codigo = "l-022",
                Precio = 149.87,
                Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00264600/00264677.jpg?3.0.138f",
            }
            );

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("Cart");
                entity.HasKey(e => e.CartId);
                entity.Property(t => t.CartId).ValueGeneratedOnAdd();
                entity.Property(c => c.Estado).HasColumnType("bit");
                entity.HasOne<Order>(c => c.Order);
                entity
                .HasOne<Client>(c => c.Client)
                .WithMany(cl => cl.Cart)
                .HasForeignKey(c => c.ClientId);
                entity
                .HasOne<Order>(c => c.Order)
                .WithOne(o => o.Cart)
                .HasForeignKey<Order>(o => o.CartId);
            });
            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");
                entity.HasKey(p => p.ProductId);
                entity.Property(p => p.ProductId).ValueGeneratedOnAdd();
                entity.Property(p => p.Nombre).HasColumnType("TEXT");
                entity.Property(p => p.Descripcion).HasColumnType("TEXT");
                entity.Property(p => p.Marca).HasColumnType("nvarchar(25)");
                entity.Property(p => p.Codigo).HasColumnType("nvarchar(25)");
                entity.Property(p => p.Precio).HasColumnType("decimal(15,2)");
                entity.Property(p => p.Image).HasColumnType("TEXT");
                entity
                .HasMany<ProductCart>(p => p.ProductCart)
                .WithOne(cp => cp.Product);
            });
            modelBuilder.Entity<Order>(entity =>
            {
                entity.ToTable("Order");
                entity.HasKey(o => o.OrderId);
                entity.Property(p => p.OrderId).ValueGeneratedOnAdd();
                entity.Property(o => o.Total).HasColumnType("decimal(15,2)");
                entity.Property(o => o.Fecha).HasColumnType("datetime");
            });
            modelBuilder.Entity<ProductCart>(entity =>
            {
                entity.ToTable("ProductCart");
                entity.HasKey(cp => new { cp.CartId, cp.ProductId });
                entity.Property(o => o.Cantidad).HasColumnType("int");
                entity
                .HasOne<Cart>(cp => cp.Cart)
                .WithMany(c => c.ProductCart)
                .HasForeignKey(cp => cp.CartId);
                entity
                .HasOne<Product>(cp => cp.Product)
                .WithMany(p => p.ProductCart)
                .HasForeignKey(cp => cp.ProductId);
            });
        }
    }
}
