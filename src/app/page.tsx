
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import Header from "@/components/header.component";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main>
      <div>
        <Header/>
      <Link href="/sign-in" style={{ marginRight: 10 }}>
        Register
      </Link>

        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </main>
  );
}
