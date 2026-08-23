import { LoadingState } from "@/components/ui/loading";

export default function RootLoading() {
  return (
    <div className="grid-bg flex min-h-[70vh] items-center justify-center">
      <LoadingState label="Booting systems" />
    </div>
  );
}
