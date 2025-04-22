import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { db } from "./db";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

const secretKey = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key"
);

export async function signUp(email: string, password: string, name: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const [user] = await db.insert(users).values({
      id: crypto.randomUUID(),
      email,
      password: hashedPassword,
      name,
    }).returning();
    
    const token = await createToken(user.id);
    return { token, user };
  } catch (error) {
    throw new Error("Error creating user");
  }
}

export async function signIn(email: string, password: string) {
  const [user] = await db.select().from(users).where(eq(users.email, email));
  
  if (!user) {
    throw new Error("User not found");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  
  if (!validPassword) {
    throw new Error("Invalid password");
  }

  const token = await createToken(user.id);
  return { token, user };
}

async function createToken(userId: string) {
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(secretKey);

  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 86400, // 24 hours
  });

  return token;
}

export async function verifyAuth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    throw new Error("No token found");
  }

  try {
    const verified = await jwtVerify(token, secretKey);
    return verified.payload as { userId: string };
  } catch (error) {
    throw new Error("Invalid token");
  }
}