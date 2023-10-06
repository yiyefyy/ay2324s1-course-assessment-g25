import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = searchParams.get('page') || 1
  const limit = searchParams.get('limit') || 10

  const response = await fetch(BASE_URL + `/api/v1/questions?page=${page}&limit=${limit}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()
  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const response = await fetch(BASE_URL + `/api/v1/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  const data = await response.json()
  return NextResponse.json(data)
}