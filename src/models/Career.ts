import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICareer extends Document {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience?: string;
  resumeUrl: string;
  createdAt: Date;
}

const CareerSchema: Schema<ICareer> = new Schema({
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
  position: {
    type: String,
    required: [true, "Position is required"],
  },
  experience: {
    type: String,
    required: false,
  },
  resumeUrl: {
    type: String,
    required: [true, "Resume is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Index for ultra-fast sorting and dashboard queries
CareerSchema.index({ createdAt: -1 });

const Career: Model<ICareer> =
  mongoose.models.Career || mongoose.model<ICareer>("Career", CareerSchema);

export default Career;
