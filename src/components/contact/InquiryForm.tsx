import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Copy, Check, Sparkles, ArrowDownRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website',
    budget: '$1k - $3k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = ['Website', 'UI/UX Design', 'AI Product', 'Creative Dev', 'Other'];
  const budgets = ['<$1k', '$1k - $3k', '$3k - $5k', '$5k+'];

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) return;
    setIsSubmitting(true);

    try {
      // POST to Netlify Forms endpoint for serverless message collection
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData
        })
      });
    } catch (err) {
      console.warn('Netlify form submission caught (falling back gracefully):', err);
    } finally {
      setIsSubmitting(false);
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFE500', '#ffffff', '#B8A1FF', '#4ADE80']
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shrikanth2078@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-12 rounded-2xl bg-arcade-card border-2 border-arcade-yellow text-center space-y-6 shadow-brutalist-card"
      >
        <div className="w-16 h-16 rounded-xl bg-arcade-yellow text-black flex items-center justify-center mx-auto border-2 border-black shadow-[3px_3px_0px_#000000]">
          <CheckCircle className="w-8 h-8 text-black" />
        </div>
        <div className="space-y-2">
          <h3 className="font-pixel text-2xl sm:text-3xl font-extrabold text-white">
            ORDER SLIP DISPATCHED!
          </h3>
          <p className="text-text-secondary text-sm sm:text-base max-w-md mx-auto font-normal">
            Thanks for reaching out, <strong className="text-white">{formData.name}</strong>. I've received your project details and will get back to you within 24 hours.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`mailto:shrikanth2078@gmail.com?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-arcade-yellow text-black font-pixel font-bold text-xs border-2 border-black shadow-[3px_3px_0px_#000000] hover:bg-arcade-yellow-hover transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>OPEN EMAIL CLIENT</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-surface-950 border border-arcade-border text-xs font-pixel text-text-secondary hover:text-white transition-colors"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-arcade-card border-2 border-arcade-border-strong shadow-brutalist-card space-y-6"
    >
      {/* Hidden inputs for Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="projectType" value={formData.projectType} />
      <input type="hidden" name="budget" value={formData.budget} />

      <div className="flex items-center justify-between pb-4 border-b border-arcade-border">
        <div>
          <h3 className="font-pixel text-xl sm:text-2xl font-bold text-white">START A PROJECT ORDER SLIP</h3>
          <p className="text-xs text-text-secondary font-mono mt-0.5">Let's discuss timelines, scope, and deliverables</p>
        </div>
        <Sparkles className="w-5 h-5 text-arcade-yellow" />
      </div>

      {/* Project Type Select Pills */}
      <div className="space-y-2">
        <label className="block text-xs font-pixel uppercase tracking-wider text-arcade-yellow">
          1. WHAT ARE YOU LOOKING TO BUILD?
        </label>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, projectType: type })}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                formData.projectType === type
                  ? 'bg-arcade-yellow text-black font-bold border border-black shadow-[2px_2px_0px_#000000]'
                  : 'bg-surface-950 border border-arcade-border text-text-secondary hover:text-white hover:border-arcade-border-strong'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Budget Range */}
      <div className="space-y-2">
        <label className="block text-xs font-pixel uppercase tracking-wider text-arcade-yellow">
          2. APPROXIMATE BUDGET (USD)
        </label>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setFormData({ ...formData, budget: b })}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                formData.budget === b
                  ? 'bg-arcade-purple text-black font-bold border border-black shadow-[2px_2px_0px_#000000]'
                  : 'bg-surface-950 border border-arcade-border text-text-secondary hover:text-white hover:border-arcade-border-strong'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Name & Email Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="block text-xs font-mono text-text-secondary">Your Name *</label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Alex Mercer"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-950 border border-arcade-border text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-arcade-yellow transition-colors font-mono"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-mono text-text-secondary">Your Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="e.g. alex@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-950 border border-arcade-border text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-arcade-yellow transition-colors font-mono"
          />
        </div>
      </div>

      {/* Project Idea / Message */}
      <div className="space-y-1.5">
        <label className="block text-xs font-mono text-text-secondary">
          Tell me about your project or idea *
        </label>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Describe what you're building, target audience, core features, and any links or references..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-950 border border-arcade-border text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-arcade-yellow transition-colors resize-none font-mono"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-lg bg-arcade-yellow text-black font-pixel font-bold text-sm tracking-wider border-2 border-black shadow-[3px_3px_0px_#000000] hover:bg-arcade-yellow-hover hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span>{isSubmitting ? 'DISPATCHING SLIP...' : 'SUBMIT ORDER SLIP'}</span>
        <ArrowDownRight className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
      </button>

      {/* Quick Direct Email Option */}
      <div className="pt-3 border-t border-arcade-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-muted">
        <span>Prefer direct email?</span>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-950 border border-arcade-border text-text-secondary hover:text-arcade-yellow hover:border-arcade-yellow transition-colors shadow-[1px_1px_0px_#000000]"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-arcade-yellow" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied to clipboard!' : 'shrikanth2078@gmail.com'}</span>
        </button>
      </div>
    </form>
  );
};
