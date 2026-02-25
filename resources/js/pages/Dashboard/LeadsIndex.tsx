export default function LeadsIndex({ leads }: any) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-6">Leads reçus</h1>

      <div className="space-y-4">
        {leads.map((lead: any) => (
          <div
            key={lead.id}
            className="p-4 bg-[#112240] rounded-lg text-white"
          >
            <p><strong>Nom :</strong> {lead.name}</p>
            <p><strong>Email :</strong> {lead.email}</p>
            <p><strong>Type :</strong> {lead.website_type}</p>
            <p><strong>Message :</strong> {lead.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}