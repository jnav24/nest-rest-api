import {Controller, Get, Post, Body, Put, Delete, Param} from '@nestjs/common';
import {CreateItemDto} from './dto/create-item.dto';
import {ItemsService} from './items.service';
import {ItemInterface} from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): ItemInterface[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    find(@Param() param) {
        return 'Item: ' + param.id;
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name ${createItemDto.name}`;
    }

    @Delete(':id')
    delete(@Param('id') id) {
        return `Delete: ${id}`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateItemDto: CreateItemDto) {
        return `Update ${id} - Name: ${updateItemDto.name}`;
    }
}
