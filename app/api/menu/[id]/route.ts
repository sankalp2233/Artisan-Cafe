import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Menu from '@/models/Menu';

// PUT update menu item (admin only)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = req.headers.get('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const body = await req.json();
        const menuItem = await Menu.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        });

        if (!menuItem) {
            return NextResponse.json({ success: false, error: 'Menu item not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: menuItem });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

// DELETE menu item (admin only)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const token = req.headers.get('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const menuItem = await Menu.findByIdAndDelete(params.id);

        if (!menuItem) {
            return NextResponse.json({ success: false, error: 'Menu item not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
