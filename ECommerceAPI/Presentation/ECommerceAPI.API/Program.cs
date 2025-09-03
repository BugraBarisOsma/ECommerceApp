using ECommerceAPI.Application.Validators.Products;
using ECommerceAPI.Application.ViewModels.Products;
using ECommerceAPI.Persistence;
using FluentValidation;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddPersistenceServices(builder.Configuration);
builder.Services.AddAuthorization();
builder.Services.AddControllers();

//FluentValidation
// Deprecate olsa da FluentValdiation.AspNetCore eklenmesi gerekmektedir yoksa burada fluentvalidation eklerken sorun cikmaktadir
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddValidatorsFromAssemblyContaining<CreateProductValidator>();

builder.Services.AddEndpointsApiExplorer();

//Swagger ve CORS
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options => options.AddDefaultPolicy(policy =>
policy.WithOrigins("http://localhost:4200").AllowAnyHeader()
.AllowCredentials()
.AllowAnyMethod()));


var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
