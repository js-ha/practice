import connect from '@/lib/db';
import { NextResponse } from 'next/server';
import blogSchema from '@/lib/db/schema/blog';

export const GET = async () => {
  try {
    await connect();

    const blogs = await blogSchema.find();
    return new NextResponse(JSON.stringify(blogs), { status: 200 });
  } catch (err) {
    return new NextResponse('server error!', { status: 500 });
  }
};

export const POST = async () => {};
