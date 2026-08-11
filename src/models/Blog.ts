import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  tags: string[];
  readTime: number;
  metaTitle?: string;
  metaDescription?: string;
  faqs?: { question: string; answer: string }[];
  featured: boolean;
  published: boolean;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, default: "/images/backgorund.webp" },
    category: {
      type: String,
      required: true,
      default: "Industry News",
    },
    author: {
      name: { type: String, default: "Mewar Hi-Tech" },
      avatar: { type: String, default: "/images/logo.png" },
      title: { type: String, default: "Editorial Team" },
    },
    tags: [{ type: String }],
    readTime: { type: Number, default: 5 },
    metaTitle: { type: String },
    metaDescription: { type: String },
    faqs: [
      {
        question: { type: String },
        answer: { type: String },
      },
    ],
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Create text index for search
BlogSchema.index({ title: "text", excerpt: "text", tags: "text" });

// Delete the existing model to force a schema reload in development
if (mongoose.models.Blog) {
  delete mongoose.models.Blog;
}

const Blog: Model<IBlog> = mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
