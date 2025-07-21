using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ECommerceAPI.Application.Abstractions;
using ECommerceAPI.Persistence.Concretes;
using Microsoft.Extensions.DependencyInjection;

namespace ECommerceAPI.Persistence
{
    // Abstractionu var olan IoC'ye eklemek icin bu extension methodu ekledik (nuget de eklendi buraya). Program.cs'deki services ile ayni kutuphane. Bu Extensionu yazdiktan sonra bunu program.cs icerisinde cagirilmasi lazim 
    public static class ServiceRegisteration
    {
        public static void AddPersistenceServices(this IServiceCollection services) 
        {
            services.AddSingleton<IProductService,ProductService>();
        }
    }
}
