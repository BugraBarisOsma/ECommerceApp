using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ECommerceAPI.Domain.Entities;
using ECommerceAPI.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;

namespace ECommerceAPI.Persistence.Contexts
{
    public class ECommerceAPIDbContext : DbContext
    {
        public ECommerceAPIDbContext(DbContextOptions options) : base(options) 
        {
            
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customer { get; set; }

        // SaveChaangesAsync Interceptor yapisi
        // bu sayede saveleme islemi sirasinda araya girip gerekli atama vs isleri yapiyoruz
        // Orn: CreatedDate icin DateTime.UtcNow ya da DateTime.Now gerekli olacaktir
        // ancak database'e gore bu degisebilir . biz bunu bu kisimda sagliyoruz
        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            // Change tracker entityler uzerinden yapilanm degisikliklerin ya da yeni eklenen verinin yakalanmasini saglayan propertydir.
            // track edilen verileri yakalayip elde etmemizi saglar
            var datas = ChangeTracker
                 .Entries<BaseEntity>();
            foreach(var data in datas)
            {
                // _ ile discard yaptik yani herhangi bir deger dondurmeyecek cunku burada datayi tutmak gereksiz olacak
                 _ = data.State switch
                {
                    EntityState.Added => data.Entity.CreatedDate = DateTime.UtcNow,
                    EntityState.Modified => data.Entity.UpdatedDate= DateTime.UtcNow,
                    EntityState.Deleted => data.Entity.DeletedDate = DateTime.UtcNow,
                    _ => DateTime.UtcNow
                };
            }


            return await base.SaveChangesAsync(cancellationToken);
        }
    }
}
