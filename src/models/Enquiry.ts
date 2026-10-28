import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  company?: string;
  address?: string;
  message: string;
  type: "Contact" | "Product";
  productName?: string;
  createdAt: Date;
}

const EnquirySchema: Schema<IEnquiry> = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  company: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  type: {
    type: String,
    enum: ["Contact", "Product"],
    required: [true, "Type is required"],
  },
  productName: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Indexes for ultra-fast sorting and dashboard queries
EnquirySchema.index({ createdAt: -1 });
EnquirySchema.index({ type: 1, createdAt: -1 });

const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

export default Enquiry;
