import { NextResponse } from "next/server";
import { signUp } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();
    const { token, user } = await signUp(email, password, name);
    
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating user" },
      { status: 500 }
    );
  }
}