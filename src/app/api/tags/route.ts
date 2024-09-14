import {
  deleteTagSchema,
  newTagSchema,
} from "@/app/(dashboard)/dashboard/tags/_schema/tag.schema";
import { auth } from "@/auth";
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = newTagSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 }
      );
    }

    const { name, color, userId } = result.data;

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
    console.error("Error creating tag:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
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
  try {
    const body = await request.json();

    const result = deleteTagSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.message },
        { status: 400 }
      );
    }

    const { id } = result.data;

    const tag = await prisma.tag.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(tag, { status: 200 });
  } catch (error) {
    console.error("Error deleting tag:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
