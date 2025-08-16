using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ECommerceAPI.Domain.Entities.Common;

namespace ECommerceAPI.Application.Repositories
{
    public interface IWriteRepository<T> : IRepository<T> where T : BaseEntity
    {
        Task<bool> AddAsync(T entity);
        Task<bool> AddRangeAsync(IEnumerable<T> entities);
        bool Remove(T entity);
        Task<bool> RemoveAsync(string id);
        bool RemoveRange(IEnumerable<T> entities);
        bool Update(T entity);
        Task<int> SaveAsync();

    }
}
