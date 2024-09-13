import { Route } from "@/sdk/utils/Route";
import Link from "next/link";

export default function TagsPage() {
  return (
    <div>
      Tags: <Link href={Route.TAGS_NEW}>Créer un tag</Link>
    </div>
  );
}
