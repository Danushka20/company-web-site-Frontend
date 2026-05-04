import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

interface FeedbackFormData {
  fullName: string;
  email: string;
  rating: number;
  feedback: string;
}

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    fullName: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const MAX_FEEDBACK_LENGTH = 500;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName.trim()) {
      setSubmitMessage({ type: "error", text: "Please enter your full name" });
      return;
    }
    if (!formData.email.trim()) {
      setSubmitMessage({
        type: "error",
        text: "Please enter your email address",
      });
      return;
    }
    if (!formData.email.includes("@")) {
      setSubmitMessage({
        type: "error",
        text: "Please enter a valid email address",
      });
      return;
    }
    if (formData.rating === 0) {
      setSubmitMessage({
        type: "error",
        text: "Please provide a rating",
      });
      return;
    }
    if (!formData.feedback.trim()) {
      setSubmitMessage({
        type: "error",
        text: "Please share your feedback",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint
      // const response = await api.post('/feedback', formData);

      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage({
        type: "success",
        text: "Thank you for your feedback! We appreciate your input.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        rating: 0,
        feedback: "",
      });

      // Clear message after 3 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 3000);
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "Failed to submit feedback. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Share Your Experience
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            We Value Your <span className="text-blue-600">Feedback</span>
          </h2>
          <p className="text-gray-600">
            Have you worked with us or used our solutions? Let us know what you
            think. Your testimonial helps us grow and helps others make informed
            decisions.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name & Email */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. John Smith"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              Overall Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <svg
                    className={`h-8 w-8 transition-colors ${
                      star <= (hoveredRating || formData.rating)
                        ? "fill-blue-400 text-blue-400"
                        : "fill-gray-300 text-gray-300"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div>
            <label
              htmlFor="feedback"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Your Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              placeholder="Share your experience working with Sky Smart Technology..."
              maxLength={MAX_FEEDBACK_LENGTH}
              rows={6}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none placeholder-gray-400 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <div className="mt-2 text-right text-xs text-gray-500">
              {formData.feedback.length} / {MAX_FEEDBACK_LENGTH}
            </div>
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div
              className={`rounded-lg p-4 text-sm font-medium ${
                submitMessage.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
