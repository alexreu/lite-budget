import { auth } from "@/auth";
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, color, userId } = await request.json();

    if (!name || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const tag = await prisma.tag.create({
      data: {
        name,
        color,
        userId,
      },
    });

    return NextResponse.json(tag);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function GET() {
  const session = await auth();

  try {
    const tags = await prisma.tag.findMany({
      where: {
        userId: session?.user?.id,
      },
    });
    return NextResponse.json(tags);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  try {
    const tag = await prisma.tag.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(tag);
  } catch (error) {
    return NextResponse.json(error);
  }
}
