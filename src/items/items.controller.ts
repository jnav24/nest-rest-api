import {Controller, Get, Post, Body, Put, Delete, Param} from '@nestjs/common';
import { CreateItemDto} from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all items';
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
