import { CheckCircle } from "lucide-react";

interface ContactSuccessStateProps {
  onReset: () => void;
}

export function ContactSuccessState({ onReset }: ContactSuccessStateProps) {
  return (
    <div className="text-center py-12" aria-live="polite">
      <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
      <h4 className="text-xl font-bold text-gray-900 mb-2">We Got Your Vision!</h4>
      <p className="text-gray-500">
        We&apos;ll reach out within 24 hours to schedule your free consultation.
      </p>
      <p className="text-sm text-gray-500 mt-3">
        If your project is time-sensitive, you can also call us directly at (510) 755-5616.
      </p>
      <button onClick={onReset} className="mt-6 text-primary font-medium hover:underline">
        Submit another request
      </button>
    </div>
  );
}
