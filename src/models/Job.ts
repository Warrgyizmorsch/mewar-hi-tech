import mongoose, { Schema, Document, Model } from "mongoose";

export interface IJob extends Document {
  title: string;
  department: string;
  experience: string;
  education: string;
  location: string;
  type: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema<IJob> = new Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    experience: {
      type: String,
      required: [true, "Experience is required"],
    },
    education: {
      type: String,
      required: [true, "Education/Qualification is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    type: {
      type: String,
      required: [true, "Job type is required (e.g., Full-Time)"],
      default: "Full-Time",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

const Job: Model<IJob> =
  mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);

export default Job;
