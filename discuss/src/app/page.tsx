import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in!</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">Sign out!</Button>
      </form>

      <Profile />
    </div>
  );
}
