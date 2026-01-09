import { useSession } from "../auth-client";

export function useAuthenticatedUser() {
  const { data: session } = useSession();
  return { user: session?.user };
}
