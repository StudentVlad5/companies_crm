import AddCompanyButton from "@/components/add-company-button";
import StatusLabel, { Status } from "../components/statusLabel"

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home Page</h1>
      <h1 className="text-xl">{new Date().toLocaleString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <AddCompanyButton />
    </main>
  );
}
