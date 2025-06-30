import { NextRequest, NextResponse } from 'next/server';
import connect from '@/lib/mongodb';
import Project from '@/models/Project';

export async function GET() {
  await connect();
  const projects = await Project.find().sort({ createdAt: -1 });
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await connect();
    const project = await Project.create(data);
    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
