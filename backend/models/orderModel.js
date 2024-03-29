import mongoose, { mongo } from "mongoose";


const orderItemSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    quantity: {
        type:Number,
        required:true,
        default:1
    },
    image: {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required:true
    },
    product: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Product"
    }

});

const shippingAddressSchema = new mongoose.Schema({
    address: {
        type:String,
        required:true,
    },
    city: {
        type: String,
        required:true,
    },
    postalCode: {
        type: String,
        required:true,
    },
    country: {
        type:String,
        required:true,
    }
});

const paymentResultSchema = new mongoose.Schema({
    id: {
        type:String,
    },
    status: {
        type:String,
    },
    update_time: {
        type:String,
    },
    emai_address: {
        type:String
    }
});

const orderSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    orderItems: [
        orderItemSchema
    ],
    shippingAddress:shippingAddressSchema,
    paymentMethod: {
        type:String,
        required:true,
    },
    paymentResult: paymentResultSchema,
    itemsPrice: {
        type:Number,
        required:true,
        default:0.0
    },
    taxPrice: {
        type:Number,
        required:true,
        default:0.0
    },
    shippingPrice: {
        type:Number,
        required:true,
        default:0.0
    },
    isPaid: {
        type: Boolean,
        required:true,
        default:false
    },

    paidAt: {
        type:Date
    },
    isDelivered: {
        type:Boolean,
        required:true,
        default:false
    },

    deliveredAt: {
        type:Date,
    }
}, {
    timestamps: true
});

const Order = mongoose.model("Order", orderSchema);

export default Order;