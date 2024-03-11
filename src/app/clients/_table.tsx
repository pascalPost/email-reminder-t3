import { Client } from "./_schema";
import { useQuery } from "@tanstack/react-query";
import { columns } from "./_columns";
import { DataTable } from "./_data-table";

// async function fetchClients(): Promise<Client[]> {
//   // return axios.get("/client").then((response) => {
//   //   if (response.status == 200 && response.data == null) {
//   //     // success response with empty data
//   //     return [];
//   //   }
//   //   return response.data as Client[];
//   // });
// }

export function ClientTable() {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["getClients"],
  //   queryFn: async () => {
  //     return [] as Client[];
  //   },
  // });
  //
  // if (isPending)
  //   return <DataTable columns={columns} data={[]} loading={true} />;
  // // if (error) return <div>An error occurred: {error.message}</div>;

  return <DataTable columns={columns} data={[]} />;
}
