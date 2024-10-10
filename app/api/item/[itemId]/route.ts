import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

interface IParams {
    itemId?: string;
}

export async function DELETE(request: Request, { itemId }: IParams) {
    const item = await prisma.item.delete({
        where: {
            id: itemId,
        },
    });

    return NextResponse.json(item);
}
