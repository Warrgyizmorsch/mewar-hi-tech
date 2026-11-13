"use client";

import React, { useState } from "react";
import { X, Upload, Send } from "lucide-react";
import { toast } from "react-toastify";
import SelectionDropdown from "@/components/ui/SelectionDropdown";
import BlobButton from "@/components/ui/BlobButton";
import {
  containsScriptOrCode,
  inputBorderClass,
  validateCompanyName,
  validateEmailAddress,
  validateExperience,
  validateFields,
  validateMobileNumber,
  validatePersonName,
  validateResumeFile,
} from "@/lib/validation";

export default function ApplicationModal({
  isOpen,
  onClose,
  jobs,
  selectedJobTitle,
  setSelectedJobTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  jobs: any[];
  selectedJobTitle: string;
  setSelectedJobTitle: (title: string) => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  if (!isOpen) return null;

  const fieldValidators: Record<string, (val: string) => string | null> = {
    name: validatePersonName,
    email: validateEmailAddress,
    phone: validateMobileNumber,
    experience: (val) => validateExperience(val, true),
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const validator = fieldValidators[name];
    if (!validator) return;
    const fieldErr = validator(value);
    if (errors[name] || containsScriptOrCode(value) || (value.trim() && fieldErr)) {
      setErrors((prev) => ({ ...prev, [name]: fieldErr || undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setFileName("");
      return;
    }
    const fileErr = validateResumeFile(file);
    if (fileErr) {
      setErrors((prev) => ({ ...prev, resume: fileErr }));
      setFileName("");
      e.target.value = "";
      toast.error(fileErr);
      return;
    }
    setErrors((prev) => ({ ...prev, resume: undefined }));
    setFileName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fileInput = (e.target as HTMLFormElement).querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    const validationErrors: Record<string, string | undefined> = {
      ...validateFields(formData, fieldValidators),
    };
    const positionErr = validateCompanyName(selectedJobTitle || "", true);
    if (positionErr) validationErrors.position = "Please select a valid position.";
    const resumeErr = validateResumeFile(file);
    if (resumeErr) validationErrors.resume = resumeErr;

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErr = Object.values(validationErrors).find(Boolean);
      if (firstErr) toast.error(firstErr);
      return;
    }

    setErrors({});
    setSubmitting(true);
    
    try {
      const submitData = new FormData();
      submitData.append("name", formData.name.trim());
      submitData.append("email", formData.email.trim());
      submitData.append("phone", formData.phone.trim());
      submitData.append("position", selectedJobTitle.trim());
      submitData.append("experience", formData.experience.trim());
      submitData.append("resume", file as File);

      const res = await fetch("/api/career", {
        method: "POST",
        body: submitData,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit application");
      }

      toast.success(
        "Application submitted successfully. Our HR team will review your profile shortly."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
      });
      setFileName("");
      
      if (fileInput) fileInput.value = "";
      onClose(); // Close modal on success
    } catch (error: any) {
      toast.error(error.message || "Failed to submit application. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-card w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative border border-border">
        {/* Decorative background blob */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="p-6 md:px-8 border-b border-border flex justify-between items-start relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[2.5px] bg-primary shrink-0 rounded-full" />
              <span className="text-primary eyebrow">ONLINE JOB APPLICATION</span>
            </div>
            <h3 className="heading-primary text-[#0A1A3B] dark:text-white !text-2xl">
              SUBMIT <span className="text-primary inline-block">YOUR PROFILE</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 hover:bg-muted rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Form */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-4 py-3 text-xs bg-background focus:bg-background focus:outline-none transition font-semibold ${inputBorderClass(errors.name)}`}
                />
                {errors.name && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-4 py-3 text-xs bg-background focus:bg-background focus:outline-none transition font-semibold ${inputBorderClass(errors.email)}`}
                />
                {errors.email && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Phone No *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-4 py-3 text-xs bg-background focus:bg-background focus:outline-none transition font-semibold ${inputBorderClass(errors.phone)}`}
                />
                {errors.phone && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.phone}</p>}
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Position Applied For *
                </label>
                <SelectionDropdown
                  id="position"
                  value={selectedJobTitle}
                  onChange={setSelectedJobTitle}
                  options={jobs.length > 0 ? jobs.map((j) => j.title) : ["Open Application"]}
                  className="w-full text-xs font-semibold"
                  buttonClassName="border rounded-xl px-4 py-3 text-xs bg-background focus:bg-background"
                />
              </div>
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Total Experience &amp; Current Company *
              </label>
              <input
                id="experience"
                name="experience"
                type="text"
                required
                placeholder="Enter years of experience"
                value={formData.experience}
                onChange={handleChange}
                className={`w-full rounded-xl border px-4 py-3 text-xs bg-background focus:bg-background focus:outline-none transition font-semibold ${inputBorderClass(errors.experience)}`}
              />
              {errors.experience && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.experience}</p>}
            </div>

            {/* Resume Upload Box */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Attach Resume (PDF / DOCX) *
              </label>
              <div className={`border-2 border-dashed hover:border-primary transition-colors rounded-xl p-6 text-center cursor-pointer relative bg-muted/30 ${errors.resume ? "border-red-500" : "border-border"}`}>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload size={24} className="mx-auto text-primary mb-2" />
                <span className="block text-sm font-bold text-foreground">
                  {fileName ? fileName : "Click or Drag & Drop Resume File"}
                </span>
                <span className="block text-[10px] text-muted-foreground uppercase mt-1">
                  PDF, DOC, DOCX up to 10MB
                </span>
              </div>
              {errors.resume && <p className="mt-1 text-[11px] font-medium text-red-500">{errors.resume}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <BlobButton
                type="submit"
                disabled={submitting}
                variant="primary"
                className="!w-full !py-4 !text-xs !font-bold !uppercase !tracking-wider"
              >
                <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">
                  <Send size={16} />
                  <span>{submitting ? "Submitting..." : "Submit Application"}</span>
                </span>
              </BlobButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
