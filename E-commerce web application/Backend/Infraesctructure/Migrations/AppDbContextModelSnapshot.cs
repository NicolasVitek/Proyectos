﻿// <auto-generated />
using System;
using Infraesctructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Infraesctructure.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.0");

            modelBuilder.Entity("Domain.Entities.Carrito", b =>
                {
                    b.Property<Guid>("CarritoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("ClienteId")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Estado")
                        .HasColumnType("bit");

                    b.HasKey("CarritoId");

                    b.HasIndex("ClienteId");

                    b.ToTable("Carrito", (string)null);
                });

            modelBuilder.Entity("Domain.Entities.CarritoProducto", b =>
                {
                    b.Property<Guid>("CarritoId")
                        .HasColumnType("TEXT");

                    b.Property<int>("ProductoId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Cantidad")
                        .HasColumnType("int");

                    b.HasKey("CarritoId", "ProductoId");

                    b.HasIndex("ProductoId");

                    b.ToTable("CarritoProducto", (string)null);
                });

            modelBuilder.Entity("Domain.Entities.Cliente", b =>
                {
                    b.Property<int>("ClienteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Apellido")
                        .IsRequired()
                        .HasColumnType("nvarchar(25)");

                    b.Property<int>("DNI")
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("Direccion")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("Telefono")
                        .IsRequired()
                        .HasColumnType("nvarchar(13)");

                    b.HasKey("ClienteId");

                    b.ToTable("Cliente", (string)null);

                    b.HasData(
                        new
                        {
                            ClienteId = 1,
                            Apellido = "Vitek",
                            DNI = 23344312,
                            Direccion = "Bynnon 2331",
                            Nombre = "Nicolas",
                            Telefono = "4234-1231"
                        });
                });

            modelBuilder.Entity("Domain.Entities.Orden", b =>
                {
                    b.Property<Guid>("OrdenId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("CarritoId")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Fecha")
                        .HasColumnType("datetime");

                    b.Property<double>("Total")
                        .HasColumnType("decimal(15,2)");

                    b.HasKey("OrdenId");

                    b.HasIndex("CarritoId")
                        .IsUnique();

                    b.ToTable("Orden", (string)null);
                });

            modelBuilder.Entity("Domain.Entities.Producto", b =>
                {
                    b.Property<int>("ProductoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Codigo")
                        .IsRequired()
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("Descripcion")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Marca")
                        .IsRequired()
                        .HasColumnType("nvarchar(25)");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<double>("Precio")
                        .HasColumnType("decimal(15,2)");

                    b.HasKey("ProductoId");

                    b.ToTable("Producto", (string)null);

                    b.HasData(
                        new
                        {
                            ProductoId = 1,
                            Codigo = "a-043",
                            Descripcion = "40 grm",
                            Image = "Http://static.cotodigital3.com.ar/sitios/fotos/full/00523500/00523588.jpg?3.0.138f",
                            Marca = "Sol Serrano",
                            Nombre = "Alfajor",
                            Precio = 37.990000000000002
                        },
                        new
                        {
                            ProductoId = 2,
                            Codigo = "a-099",
                            Descripcion = "Edicion 1950, 1 kgrm",
                            Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00510600/00510606.jpg?3.0.138f",
                            Marca = "Amanda",
                            Nombre = "Yerba mate",
                            Precio = 543.33000000000004
                        },
                        new
                        {
                            ProductoId = 3,
                            Codigo = "a-007",
                            Descripcion = "520 grm",
                            Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00263300/00263369.jpg?3.0.138f",
                            Marca = "Corper",
                            Nombre = "Pure de tomate",
                            Precio = 95.400000000000006
                        },
                        new
                        {
                            ProductoId = 4,
                            Codigo = "a-211",
                            Descripcion = "20 grm",
                            Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00230100/00230124.jpg?3.0.138f",
                            Marca = "La Virginia",
                            Nombre = "Cafe molido",
                            Precio = 388.14999999999998
                        },
                        new
                        {
                            ProductoId = 5,
                            Codigo = "a-055",
                            Descripcion = "Bajo en sodio, 340 grm",
                            Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00537400/00537472.jpg?3.0.138f",
                            Marca = "Doña Pupa",
                            Nombre = "Arvejas",
                            Precio = 65.390000000000001
                        },
                        new
                        {
                            ProductoId = 6,
                            Codigo = "b-013",
                            Descripcion = "Sin gas, 2.5 lt",
                            Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00289600/00289636.jpg?3.0.138f",
                            Marca = "Bonaqua",
                            Nombre = "Agua mineral",
                            Precio = 91.709999999999994
                        },
                        new
                        {
                            ProductoId = 7,
                            Codigo = "b-020",
                            Descripcion = "Light, 2 lt",
                            Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00189500/00189594.jpg?3.0.138f",
                            Marca = "Coca-Cola",
                            Nombre = "Gaseosa",
                            Precio = 134.55000000000001
                        },
                        new
                        {
                            ProductoId = 8,
                            Codigo = "f-103",
                            Descripcion = "Entera, sache 1 lt",
                            Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00170500/00170599.jpg?3.0.138f",
                            Marca = "La Serenisima",
                            Nombre = "Leche",
                            Precio = 183.25
                        },
                        new
                        {
                            ProductoId = 9,
                            Codigo = "c-017",
                            Descripcion = "Caja 160 grm",
                            Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00499100/00499140.jpg?3.0.138f",
                            Marca = "Fudy",
                            Nombre = "Cookie Sandwich",
                            Precio = 259.0
                        },
                        new
                        {
                            ProductoId = 10,
                            Codigo = "l-022",
                            Descripcion = "Doble hoja, caja 100u",
                            Image = "https://static.cotodigital3.com.ar/sitios/fotos/full/00264600/00264677.jpg?3.0.138f",
                            Marca = "Elite",
                            Nombre = "Pañuelos",
                            Precio = 149.87
                        });
                });

            modelBuilder.Entity("Domain.Entities.Carrito", b =>
                {
                    b.HasOne("Domain.Entities.Cliente", "Cliente")
                        .WithMany("Carrito")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");
                });

            modelBuilder.Entity("Domain.Entities.CarritoProducto", b =>
                {
                    b.HasOne("Domain.Entities.Carrito", "Carrito")
                        .WithMany("CarritoProducto")
                        .HasForeignKey("CarritoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Domain.Entities.Producto", "Producto")
                        .WithMany("CarritoProducto")
                        .HasForeignKey("ProductoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Carrito");

                    b.Navigation("Producto");
                });

            modelBuilder.Entity("Domain.Entities.Orden", b =>
                {
                    b.HasOne("Domain.Entities.Carrito", "Carrito")
                        .WithOne("Orden")
                        .HasForeignKey("Domain.Entities.Orden", "CarritoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Carrito");
                });

            modelBuilder.Entity("Domain.Entities.Carrito", b =>
                {
                    b.Navigation("CarritoProducto");

                    b.Navigation("Orden")
                        .IsRequired();
                });

            modelBuilder.Entity("Domain.Entities.Cliente", b =>
                {
                    b.Navigation("Carrito");
                });

            modelBuilder.Entity("Domain.Entities.Producto", b =>
                {
                    b.Navigation("CarritoProducto");
                });
#pragma warning restore 612, 618
        }
    }
}
