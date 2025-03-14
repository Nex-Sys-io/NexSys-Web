"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ProjectSurvey({ isOpen, onClose }) {
  const { theme } = useTheme();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    specificProject: "",
    formId: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const sendToBackend = async (stepData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          step: step,
          data: stepData,
          formId: formData.formId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit survey data');
      }

      const result = await response.json();
      
      if (result.formId && !formData.formId) {
        setFormData(prev => ({ ...prev, formId: result.formId }));
      }
      
      return true;
    } catch (error) {
      console.error('Error submitting survey data:', error);
      setError('Failed to submit data. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('Please fill in all fields');
      return;
    }
    
    const success = await sendToBackend({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    });

    if (success) {
      setStep(step + 1);
    }
  };

  const handleProjectTypeSelect = async (type) => {
    const success = await sendToBackend({ projectType: type });
    if (success) {
      setFormData(prev => ({ ...prev, projectType: type }));
      setStep(step + 1);
    }
  };

  const handleSpecificProjectSelect = async (option) => {
    const success = await sendToBackend({ 
      specificProject: option,
    });
    
    if (success) {
      setFormData(prev => ({ ...prev, specificProject: option }));
      setStep(4);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the final, complete data to the backend
    await sendToBackend({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      projectType: formData.projectType,
      specificProject: formData.specificProject,
      completed: true
    });
    setStep(4);
  };

  const productOptions = ["Fundr", "Cursive Power"];
  const serviceOptions = [
    "Missed Calls",
    "Leads Generation",
    "Website Builder",
    "Consulting",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } p-8 rounded-xl max-w-md w-full mx-4`}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 rounded border text-gray-900"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 rounded border text-gray-900"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded border text-gray-900"
                required
              />
              <button
                onClick={handleNext}
                disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email}
                className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ${
                  (isSubmitting || !formData.firstName || !formData.lastName || !formData.email) 
                    ? 'opacity-50 cursor-not-allowed' 
                    : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Next'}
              </button>
              {error && (
                <div className="text-red-500 text-sm mt-2">
                  {error}
                </div>
              )}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold mb-4">Project Type</h2>
              <div className="space-y-2">
                <button
                  onClick={() => handleProjectTypeSelect("Product")}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Product
                </button>
                <button
                  onClick={() => handleProjectTypeSelect("Service")}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Service
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold mb-4">Select Specific Project</h2>
              <div className="space-y-2">
                {(formData.projectType === "product" ? productOptions : serviceOptions).map(
                  (option) => (
                    <button
                      key={option}
                      onClick={() => handleSpecificProjectSelect(option)}
                      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-4"
            >
              <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
              <p>
                We've received your project interest and will get back to you soon at{" "}
                {formData.email}.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
} 