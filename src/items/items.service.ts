import { Injectable } from '@nestjs/common';
import { ItemInterface} from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: ItemInterface[] = [
        {
            id: '123213',
            name: 'Item one',
            qty: 1,
        },
        {
            id: '234454',
            name: 'Item two',
            qty: 1,
        },
    ];

    findAll(): ItemInterface[] {
        return this.items;
    }

    find(id: string): ItemInterface {
        return this.items.find(item => item.id === id);
    }
}
