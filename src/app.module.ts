import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { ProductsService } from './services/products/products.service';
import { BrandsService } from './services/brands/brands.service';
import { UsersService } from './services/users/users.service';
import { OrdersService } from './services/orders/orders.service';
import { CustomersService } from './services/customers/customers.service';
import { CategoriesService } from './services/categories/categories.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, OrdersController, UsersController, CustomersController, BrandsController],
  providers: [AppService, ProductsService, BrandsService, UsersService, OrdersService, CustomersService, CategoriesService],
})
export class AppModule {}
