import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Admin from '@/models/Admin';
import { comparePassword, signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { success: false, error: 'Please provide email and password' },
                { status: 400 }
            );
        }

        const admin = await Admin.findOne({ email: email.toLowerCase() });

        if (!admin) {
            return NextResponse.json(
                { success: false, error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const isPasswordValid = await comparePassword(password, admin.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { success: false, error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const token = signToken({ email: admin.email, id: admin._id.toString() });

        return NextResponse.json({
            success: true,
            data: { token, admin: { email: admin.email, id: admin._id } },
        });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
