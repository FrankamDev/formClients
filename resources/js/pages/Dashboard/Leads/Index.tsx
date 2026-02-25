import { Head, Link } from "@inertiajs/react";
import AppLayout from "../../../layouts/app-layout";

interface Lead {
    id: number;
    name: string;
    email: string;
    website_type: string;
    budget: string;
    created_at: string;
}

interface Props {
    leads: {
        data: Lead[];
        links: any[];
    };
}

export default function Index({ leads }: Props) {
    return (
        <AppLayout>
            <Head title="Leads" />

            <div className="p-6">
                <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                    Gestion des Leads
                </h1>

                <div className="bg-white shadow rounded-xl overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                <th className="px-4 py-3">Nom</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Type</th>
                                <th className="px-4 py-3">Budget</th>
                                <th className="px-4 py-3">Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {leads.data.map((lead) => (
                                <tr
                                    key={lead.id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3 font-medium">
                                        {lead.name}
                                    </td>

                                    <td className="px-4 py-3 text-gray-600">
                                        {lead.email}
                                    </td>

                                    <td className="px-4 py-3">
                                        <span className="px-2 py-1 text-xs rounded-full bg-cyan-100 text-cyan-700">
                                            {lead.website_type}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3">
                                        {lead.budget ?? "-"}
                                    </td>

                                    <td className="px-4 py-3 text-gray-500">
                                        {new Date(
                                            lead.created_at
                                        ).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex gap-2 mt-6">
                    {leads.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url ?? "#"}
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                            className={`px-3 py-1 text-sm rounded ${
                                link.active
                                    ? "bg-cyan-600 text-white"
                                    : "bg-gray-100 text-gray-700"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}