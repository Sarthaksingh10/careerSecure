// app/api/messages/route.ts

import connectMongo from "@/app/_lib/mongoDb";
import Message from "@/app/models/model";
import { NextResponse } from "next/server";
// adjust path

export async function POST(request: Request) {
  try {
    await connectMongo();

    const body = await request.json();
    const { text } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid text input" },
        { status: 400 }
      );
    }

    const newMessage = new Message({ text });
    await newMessage.save();

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
