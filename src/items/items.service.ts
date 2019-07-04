import { Injectable } from '@nestjs/common';
import { ItemInterface} from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: ItemInterface[] = [
        {
            id: 1,
            name: 'Item one',
            qty: 1,
        },
        {
            id: 2,
            name: 'Item two',
            qty: 1,
        },
    ];

    findAll(): ItemInterface[] {
        return this.items;
    }
}
