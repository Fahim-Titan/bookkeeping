import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get('ping')
  getHello(): string {
    return "pong";
  }

  @Post()
  addticker(@Body() createTicket: CreateStockDto) {
    return createTicket.name;
  }
}
