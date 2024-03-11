import { ColumnDef } from "@tanstack/react-table";
import { ActionsCell } from "./_action-cell";
import { Client } from "./_schema";

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "firstName",
    header: "Vorname",
  },
  {
    accessorKey: "lastName",
    header: "Nachname",
  },
  {
    accessorKey: "email",
    header: "E-Mail",
  },
  {
    accessorKey: "reminderFrequency",
    header: "Frequenz",
    cell: function FrequencyCell({ row }) {
      const freq = row.getValue("reminderFrequency");

      return <div>{freq === "semiannual" ? "Halbjährlich" : "Jährlich"}</div>;
    },
  },
  {
    accessorKey: "lastReminder",
    header: "Letzte Erinnerung",
    cell: function LastReminderCell({ row }) {
      const date = new Date(row.getValue("lastReminder"));
      const formatted = new Intl.DateTimeFormat("de-DE", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }).format(date);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "registrationDate",
    header: "Registrierung",
    cell: function RegistrationCell({ row }) {
      const date = new Date(row.getValue("registrationDate"));
      const formatted = new Intl.DateTimeFormat("de-DE", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }).format(date);

      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: (row) => ActionsCell(row),
  },
];
