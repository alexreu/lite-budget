import prisma from "@/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const transactions = await prisma.transaction.findMany({
      include: {
        category: true,
        account: true,
        tag: true,
      },
    });
    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json(error);
  }
}
