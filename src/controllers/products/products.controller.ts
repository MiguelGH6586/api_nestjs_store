import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  //ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    /* return {
      message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    }; */
    return {
      products: this.productsService.findAll(),
      message: `products: limit => ${limit} offset => ${offset} brand => ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return `product by filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    /* return {
      message: `product ${productId}`,
    }; */
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    /* return {
      message: 'create',
      payload,
    }; */
    //console.log(payload);
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    /* return {
      id,
      payload,
    }; */
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
