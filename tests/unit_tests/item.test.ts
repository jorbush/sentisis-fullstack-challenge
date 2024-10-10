import { POST as ItemPOST } from '@/app/api/items/route';
import { DELETE as ItemDELETE } from '@/app/api/item/[itemId]/route';
import { Type, Currency } from '@prisma/client';

describe('Items API Routes', () => {
    let createdItem: {
        id: string;
        title: string;
        type: string;
        releaseDate: Date;
        description: string;
        price: number;
        currency: string;
    } | null = null;

    it('should create a new item', async () => {
        const mockItem = {
            title: 'Test Item',
            type: Type.SHOW,
            releaseDate: new Date().toISOString(),
            description: 'Test Description',
            price: 100,
            currency: Currency.EURO,
        };
        const mockRequest = {
            json: jest.fn().mockResolvedValue(mockItem),
        } as unknown as Request;

        const response = await ItemPOST(mockRequest);
        const result = await response.json();
        expect(result).toMatchObject(mockItem);
        createdItem = result as {
            id: string;
            title: string;
            type: string;
            releaseDate: Date;
            description: string;
            price: number;
            currency: string;
        };
    });

    it('should delete the created item', async () => {
        if (!createdItem) {
            throw new Error('No item created');
        }

        const mockRequest = {
            json: jest.fn().mockResolvedValue({}),
        } as unknown as Request;

        const response = await ItemDELETE(mockRequest, { itemId: createdItem.id });
        const result = await response.json();
        expect(result).toMatchObject(createdItem);
    });

});
