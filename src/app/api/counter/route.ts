import { NextResponse } from 'next/server';
import { useEffect } from 'react';

export async function GET(request: Request) {
  console.log({ method: request.method });

  return NextResponse.json({
    method: 'GET',
    count: 100
  });
}
