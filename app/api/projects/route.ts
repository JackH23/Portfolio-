import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/mongodb';
import Project from '@/models/Project';

export async function GET() {
  if (!process.env.MONGODB_URI) {
    // Return empty list if the database is not configured
    return NextResponse.json([]);
  }

  try {
    await connect();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { message: 'Database not configured' },
      { status: 503 }
    );
  }

  try {
    const data = await req.json();
    await connect();
    const project = await Project.create(data);
    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
