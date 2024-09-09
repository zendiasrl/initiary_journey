import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {

    const { username, password, email } = await request.json()

    const user = {
        username,
        email,
        password,
    }

    let createUser = await prisma.user.create({ data: user })


    return NextResponse.json(user)

}