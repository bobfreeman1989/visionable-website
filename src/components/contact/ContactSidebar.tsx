import {
  contactInfo,
  whyChooseItems,
} from "@/content/contact";
import { Check } from "lucide-react";

export function ContactSidebar() {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {contactInfo.map((item) => (
          <div key={item.title} className="bg-surface rounded-xl p-4 border border-stone-200">
            <item.Icon className="w-6 h-6 text-primary mb-2" strokeWidth={1.5} />
            <h4 className="font-semibold text-stone-900 text-sm">{item.title}</h4>
            <p className="text-sm text-stone-700 mt-1 break-words whitespace-pre-line">{item.main}</p>
            <p className="text-xs text-stone-500">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface rounded-xl p-6 border border-stone-200">
        <h4 className="font-bold text-stone-900 mb-4">Why Visionable?</h4>
        <ul className="space-y-2.5">
          {whyChooseItems.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-stone-600">
              <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.5} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
