import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Reservation from '@/models/Reservation';

// GET all reservations (admin only) or POST new reservation (public)
export async function GET(req: NextRequest) {
    try {
        const token = req.headers.get('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const reservations = await Reservation.find({}).sort({ date: -1, createdAt: -1 });
        return NextResponse.json({ success: true, data: reservations });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

// POST new reservation (public)
export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const body = await req.json();
        const reservation = await Reservation.create(body);
        return NextResponse.json({ success: true, data: reservation }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
