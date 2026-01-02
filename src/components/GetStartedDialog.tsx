"use client";

import { CheckCircle, X } from "lucide-react";
import { useState } from "react";

interface GetStartedDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  "App Development",
  "Product Design and Branding",
  "Web Development",
  "Digital Marketing",
];

export default function GetStartedDialog({
  isOpen,
  onClose,
}: GetStartedDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectName: "",
    services: [] as string[],
    preferredTiming: "",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectName: formData.projectName,
          services: formData.services,
          preferredTiming: formData.preferredTiming,
          additionalNotes: formData.additionalNotes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }

      // Reset form and show thank you message
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectName: "",
        services: [],
        preferredTiming: "",
        additionalNotes: "",
      });
      setShowThankYou(true);
      setErrorMessage(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setShowThankYou(false);
    setErrorMessage(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Thank You Message */}
      {showThankYou ? (
        <div
          className="relative bg-[#1a1a1a] rounded-[20px] w-full max-w-[500px] border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-[#a8f348]/20 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-[#a8f348]" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Thank You!
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              We've received your inquiry and we will reach out to you soon.
            </p>
            <p className="text-white/60 text-sm mb-8">
              Our team will review your project details and contact you at your preferred timing.
            </p>
            <button
              onClick={handleClose}
              className="w-full px-6 py-3 bg-[#a8f348] text-[#1a1a1a] rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        /* Dialog */
        <div
          className="relative bg-[#1a1a1a] rounded-[20px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-semibold text-white">Get Started</h2>
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mx-6 mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Name <span className="text-[#a8f348]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#a8f348] focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Email <span className="text-[#a8f348]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#a8f348] focus:border-transparent transition-all"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Phone Number <span className="text-[#a8f348]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#a8f348] focus:border-transparent transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Project Name */}
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Project Name <span className="text-[#a8f348]">*</span>
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              required
              value={formData.projectName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#a8f348] focus:border-transparent transition-all"
              placeholder="What's your project called?"
            />
          </div>

          {/* Services */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">
              Services You're Interested In <span className="text-[#a8f348]">*</span>
            </label>
            <div className="space-y-2">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="w-5 h-5 rounded border-white/20 bg-white/5 text-[#a8f348] focus:ring-2 focus:ring-[#a8f348] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
                  />
                  <span className="text-white/90">{service}</span>
                </label>
              ))}
            </div>
            {formData.services.length === 0 && (
              <p className="text-sm text-white/50 mt-2">
                Please select at least one service
              </p>
            )}
          </div>

          {/* Preferred Timing */}
          <div>
            <label
              htmlFor="preferredTiming"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Preferred Timing for a Meet
            </label>
            <select
              id="preferredTiming"
              name="preferredTiming"
              value={formData.preferredTiming}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#a8f348] focus:border-transparent transition-all"
            >
              <option value="" className="bg-[#1a1a1a]">Select preferred timing</option>
              <option value="morning" className="bg-[#1a1a1a]">Morning (9 AM - 12 PM)</option>
              <option value="afternoon" className="bg-[#1a1a1a]">Afternoon (12 PM - 5 PM)</option>
              <option value="evening" className="bg-[#1a1a1a]">Evening (5 PM - 8 PM)</option>
              <option value="flexible" className="bg-[#1a1a1a]">Flexible / Any time</option>
            </select>
          </div>

          {/* Additional Notes */}
          <div>
            <label
              htmlFor="additionalNotes"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Additional Notes / Requirements
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              rows={4}
              value={formData.additionalNotes}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#a8f348] focus:border-transparent transition-all resize-none"
              placeholder="Tell us more about your project, timeline, budget, or any specific requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.projectName ||
                formData.services.length === 0
              }
              className="flex-1 px-6 py-3 bg-[#a8f348] text-[#1a1a1a] rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        </div>
      )}
    </div>
  );
}

