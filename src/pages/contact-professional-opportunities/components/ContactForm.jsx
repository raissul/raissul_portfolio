import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    opportunityType: '',
    projectBudget: '',
    timeline: '',
    message: '',
    urgency: '',
    preferredContact: '',
    agreementTerms: false,
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const opportunityTypes = [
    { value: 'full-time', label: 'Full-time Position' },
    { value: 'contract', label: 'Contract/Freelance' },
    { value: 'collaboration', label: 'Technical Collaboration' },
    { value: 'mentoring', label: 'Mentoring Request' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'speaking', label: 'Speaking Opportunity' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: 'above-50k', label: 'Above $50,000' },
    { value: 'negotiable', label: 'Negotiable' },
    { value: 'not-applicable', label: 'Not Applicable' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 week)' },
    { value: 'short-term', label: 'Short-term (1-4 weeks)' },
    { value: 'medium-term', label: 'Medium-term (1-3 months)' },
    { value: 'long-term', label: 'Long-term (3+ months)' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - General inquiry' },
    { value: 'medium', label: 'Medium - Within a week' },
    { value: 'high', label: 'High - Within 24-48 hours' },
    { value: 'urgent', label: 'Urgent - Same day response needed' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email (Preferred)' },
    { value: 'linkedin', label: 'LinkedIn Message' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'video', label: 'Video Call' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.opportunityType) {
      newErrors.opportunityType = 'Please select an opportunity type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters long';
    }

    if (!formData.urgency) {
      newErrors.urgency = 'Please select response urgency';
    }

    if (!formData.preferredContact) {
      newErrors.preferredContact = 'Please select preferred contact method';
    }

    if (!formData.agreementTerms) {
      newErrors.agreementTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        position: '',
        opportunityType: '',
        projectBudget: '',
        timeline: '',
        message: '',
        urgency: '',
        preferredContact: '',
        agreementTerms: false,
        newsletter: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-card rounded-xl p-8 border border-border shadow-soft">
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. I'll get back to you within 24-48 hours based on your urgency level.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitSuccess(false)}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-8 border border-border shadow-soft">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Professional Contact Form
        </h3>
        <p className="text-muted-foreground">
          Please provide details about your inquiry or opportunity. All fields marked with * are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Company/Organization"
            type="text"
            name="company"
            placeholder="Your company name"
            value={formData.company}
            onChange={handleInputChange}
          />
          
          <Input
            label="Your Position"
            type="text"
            name="position"
            placeholder="e.g., Technical Recruiter, CTO"
            value={formData.position}
            onChange={handleInputChange}
          />
        </div>

        {/* Opportunity Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Opportunity Type"
            placeholder="Select opportunity type"
            options={opportunityTypes}
            value={formData.opportunityType}
            onChange={(value) => handleSelectChange('opportunityType', value)}
            error={errors.opportunityType}
            required
          />
          
          <Select
            label="Project Budget Range"
            placeholder="Select budget range"
            options={budgetRanges}
            value={formData.projectBudget}
            onChange={(value) => handleSelectChange('projectBudget', value)}
            description="Optional - helps me understand project scope"
          />
        </div>

        <Select
          label="Timeline"
          placeholder="Select project timeline"
          options={timelineOptions}
          value={formData.timeline}
          onChange={(value) => handleSelectChange('timeline', value)}
          description="When would you like to start or discuss this opportunity?"
        />

        {/* Communication Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Response Urgency"
            placeholder="Select urgency level"
            options={urgencyLevels}
            value={formData.urgency}
            onChange={(value) => handleSelectChange('urgency', value)}
            error={errors.urgency}
            required
          />
          
          <Select
            label="Preferred Contact Method"
            placeholder="Select contact method"
            options={contactMethods}
            value={formData.preferredContact}
            onChange={(value) => handleSelectChange('preferredContact', value)}
            error={errors.preferredContact}
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Please describe your opportunity, project requirements, or inquiry in detail. Include any specific technologies, timeline, or budget considerations..."
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none text-foreground bg-background"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message}</p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            Minimum 20 characters. Current: {formData.message.length}
          </p>
        </div>

        {/* Agreements */}
        <div className="space-y-3">
          <Checkbox
            label="I agree to the terms and conditions and privacy policy"
            checked={formData.agreementTerms}
            onChange={(e) => handleInputChange(e)}
            name="agreementTerms"
            error={errors.agreementTerms}
            required
          />
          
          <Checkbox
            label="Subscribe to technical newsletter and updates"
            description="Receive occasional updates about new projects and technical insights"
            checked={formData.newsletter}
            onChange={(e) => handleInputChange(e)}
            name="newsletter"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>
      </form>

      {/* Response Time Notice */}
      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">
              Response Time Commitment
            </h4>
            <p className="text-xs text-muted-foreground">
              I typically respond within 24-48 hours for most inquiries. Urgent requests are prioritized and handled within 4-8 hours during business days (9 AM - 6 PM GMT+6).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;