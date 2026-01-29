import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Menu from '@/models/Menu';

// GET all menu items
export async function GET() {
    try {
        await dbConnect();
        const menuItems = await Menu.find({}).sort({ category: 1, name: 1 });
        return NextResponse.json({ success: true, data: menuItems });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

// POST new menu item (admin only)
export async function POST(req: NextRequest) {
    try {
        // Check authentication
        const token = req.headers.get('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const body = await req.json();
        const menuItem = await Menu.create(body);
        return NextResponse.json({ success: true, data: menuItem }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
