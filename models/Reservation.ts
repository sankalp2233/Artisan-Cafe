import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IReservation extends Document {
    name: string;
    email: string;
    phone: string;
    date: Date;
    time: string;
    guests: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    message?: string;
    createdAt: Date;
    updatedAt: Date;
}

const ReservationSchema = new Schema<IReservation>(
    {
        name: {
            type: String,
            required: [true, 'Please provide your name'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Please provide your email'],
            lowercase: true,
            trim: true,
        },
        phone: {
            type: String,
            required: [true, 'Please provide your phone number'],
        },
        date: {
            type: Date,
            required: [true, 'Please select a date'],
        },
        time: {
            type: String,
            required: [true, 'Please select a time'],
        },
        guests: {
            type: Number,
            required: [true, 'Please specify number of guests'],
            min: [1, 'At least 1 guest required'],
            max: [20, 'Maximum 20 guests allowed'],
        },
        status: {
            type: String,
            enum: ['pending', 'confirmed', 'cancelled'],
            default: 'pending',
        },
        message: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Reservation: Model<IReservation> =
    mongoose.models.Reservation || mongoose.model<IReservation>('Reservation', ReservationSchema);

export default Reservation;
