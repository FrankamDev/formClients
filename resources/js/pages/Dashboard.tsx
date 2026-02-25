// import { Head } from '@inertiajs/react';
// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
// import AppLayout from '@/layouts/app-layout';
// import { dashboard } from '@/routes';
// import type { BreadcrumbItem } from '@/types';

// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Dashboard',
//         href: dashboard().url,
//     },
// ];

// export default function Dashboard() {
//     return (
//         <AppLayout breadcrumbs={breadcrumbs}>
//             <Head title="Dashboard" />
//             <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
//                 <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//                     <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
//                         <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
//                     </div>
//                     <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
//                         <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
//                     </div>
//                     <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
//                         <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
//                     </div>
//                 </div>
//                 <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
//                     <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
//                 </div>
//             </div>
//         </AppLayout>
//     );
// }




import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

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
    totalLeads: number;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Acceuil',
        href: '/',
    },
];

export default function Dashboard({ leads, totalLeads }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">

                {/* === STATS CARDS === */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">

                    <div className="rounded-xl border border-sidebar-border/70 p-5 dark:border-sidebar-border bg-background">
                        <p className="text-sm text-muted-foreground">Total Leads</p>
                        <p className="text-3xl font-bold mt-2">{totalLeads}</p>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 p-5 dark:border-sidebar-border bg-background">
                        <p className="text-sm text-muted-foreground">Dernier Lead</p>
                        <p className="text-lg font-semibold mt-2">
                            {leads.data[0]?.name ?? '—'}
                        </p>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 p-5 dark:border-sidebar-border bg-background">
                        <p className="text-sm text-muted-foreground">Email récent</p>
                        <p className="text-lg font-semibold mt-2">
                            {leads.data[0]?.email ?? '—'}
                        </p>
                    </div>

                </div>

                {/* === TABLE === */}
                <div className="flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border bg-background">

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="border-b border-sidebar-border">
                                <tr className="text-left">
                                    <th className="px-4 py-3">Nom</th>
                                    <th className="px-4 py-3">Email</th>
                                    <th className="px-4 py-3">Type</th>
                                    <th className="px-4 py-3">Budget</th>
                                   <th className="px-4 py">Phone</th>
                                    <th className="px-4 py-3">Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {leads.data.map((lead) => (
                                    <tr
                                        key={lead.id}
                                        className="border-b border-sidebar-border hover:bg-muted/50 transition"
                                    >
                                        <td className="px-4 py-3 font-medium">
                                            {lead.name}
                                        </td>

                                        <td className="px-4 py-3 text-muted-foreground">
                                            {lead.email}
                                        </td>

                                        <td className="px-4 py-3">
                                            <span className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 text-cyan-600">
                                                {lead.website_type}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3">
                                            {lead.budget ?? '—'}
                                        </td>
                                        <td className="px-4 py-3">
                                            {lead.phone ?? '—'}
                                        </td>

                                        <td className="px-4 py-3 text-muted-foreground">
                                            {new Date(lead.created_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* === PAGINATION === */}
                    <div className="flex gap-2 p-4">
                        {leads.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url ?? '#'}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`px-3 py-1 text-sm rounded-md border ${
                                    link.active
                                        ? 'bg-primary text-primary-foreground'
                                        : 'hover:bg-muted'
                                }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}