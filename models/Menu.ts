import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IMenu extends Document {
    name: string;
    description: string;
    category: 'Beverages' | 'Food' | 'Desserts';
    price: number;
    image: string;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const MenuSchema = new Schema<IMenu>(
    {
        name: {
            type: String,
            required: [true, 'Please provide a menu item name'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Please provide a description'],
        },
        category: {
            type: String,
            enum: ['Beverages', 'Food', 'Desserts'],
            required: [true, 'Please specify a category'],
        },
        price: {
            type: Number,
            required: [true, 'Please provide a price'],
            min: [0, 'Price cannot be negative'],
        },
        image: {
            type: String,
            required: [true, 'Please provide an image URL'],
        },
        isAvailable: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Menu: Model<IMenu> = mongoose.models.Menu || mongoose.model<IMenu>('Menu', MenuSchema);

export default Menu;
