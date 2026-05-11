import {
  contactInfo,
  serviceAreas,
  whyChooseItems,
} from "@/content/contact";

export function ContactSidebar() {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {contactInfo.map((item) => (
          <div key={item.title} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <item.Icon className="w-6 h-6 text-primary mb-2" strokeWidth={1.5} />
            <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
            <p className="text-sm text-gray-700 mt-1 break-words whitespace-pre-line">{item.main}</p>
            <p className="text-xs text-gray-500">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-4">Why Visionable?</h4>
        <ul className="space-y-2.5">
          {whyChooseItems.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
              <span className="text-primary">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold text-gray-900 mb-1">Service Areas</h4>
        <p className="text-sm text-gray-500 mb-4">
          We serve homeowners across the East Bay, South Bay, and Peninsula.
        </p>
        {Object.entries(serviceAreas).map(([region, cities]) => (
          <div key={region} className="mb-3 last:mb-0">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">{region}</p>
            <div className="flex flex-wrap gap-1.5">
              {cities.map((city) => (
                <span key={city} className="text-xs text-gray-600 bg-white px-2 py-0.5 rounded border border-gray-100">
                  {city}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
