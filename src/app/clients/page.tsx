"use client";

import ClientForm from "./_form";
import { ClientTable } from "./_table";

export default function ClientsPage() {
  return (
    <>
      <ClientForm />
      <div className="container mx-auto py-10">
        <ClientTable />
      </div>
    </>
  );
}
