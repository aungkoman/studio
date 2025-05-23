import {NextRequest} from 'next/server';
import {createNextGenkitHandler} from '@genkit-ai/next';
import '@/ai/flows/testimonial-generator'; // Ensure flows are loaded

export const maxDuration = 60;

const handler = createNextGenkitHandler();

export async function GET(req: NextRequest) {
  return handler(req);
}
export async function POST(req: NextRequest) {
  return handler(req);
}
export async function PUT(req: NextRequest) {
  return handler(req);
}
export async function PATCH(req: NextRequest) {
  return handler(req);
}
export async function DELETE(req: NextRequest) {
  return handler(req);
}
export async function HEAD(req: NextRequest) {
  return handler(req);
}
