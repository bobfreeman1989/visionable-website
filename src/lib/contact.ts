// Only name and email are required — every other field is marked optional in the
// form UI, so the API must accept a submission that omits them.
export type ContactRequest = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  service?: string;
  budget?: string;
  details?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function present(value?: string) {
  if (!value?.trim()) return "Not provided";
  return escapeHtml(value.trim());
}

export function buildContactEmailHtml(payload: ContactRequest) {
  return `
    <h2>New Consultation Request</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${present(payload.name)}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>
      <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${present(payload.phone)}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Property Address</td><td style="padding:8px">${present(payload.address)}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Service</td><td style="padding:8px">${present(payload.service)}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Budget</td><td style="padding:8px">${present(payload.budget)}</td></tr>
      <tr><td style="padding:8px;font-weight:bold">Details</td><td style="padding:8px">${present(payload.details)}</td></tr>
    </table>
  `;
}
