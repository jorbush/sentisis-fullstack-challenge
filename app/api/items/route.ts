import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request: Request) {
    const body = await request.json();
    const { title, type, releaseDate, description, price, currency } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const item = await prisma.item.create({
        data: {
            title,
            type,
            releaseDate,
            description,
            price,
            currency,
        },
    });

    return NextResponse.json(item);
}
