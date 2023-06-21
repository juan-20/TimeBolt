
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from '@/lib/db'
import Link from "next/link";
import Header from "@/components/header.component";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  
  let comments
  if (session) {
    comments = await db.user.findFirst({
      where: {
        email: session?.user?.email || undefined,
      },
    });
  }

  return (
    <main>
      <div>
        <Header/>
      <Link href="/sign-in" style={{ marginRight: 10 }}>
        Register
      </Link>

        <h1>Bem vindo</h1>
        <pre>{JSON.stringify(session)}</pre>
        <pre>{JSON.stringify(comments)}</pre>
      </div>
    </main>
  );
}
