import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Reservation from '@/models/Reservation';

// PUT update reservation status (admin only)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = req.headers.get('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const body = await req.json();
        const reservation = await Reservation.findByIdAndUpdate(
            params.id,
            { status: body.status },
            { new: true, runValidators: true }
        );

        if (!reservation) {
            return NextResponse.json({ success: false, error: 'Reservation not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: reservation });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
