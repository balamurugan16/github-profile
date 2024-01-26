import { Match, Switch, createResource } from "solid-js";
import Hero from "./components/Hero";
import { useSearchParams } from "@solidjs/router"
import { getUserData } from "./services";

export default function User() {
  const [searchParams] = useSearchParams<{ id: string }>()
  const [user] = createResource(searchParams.id, getUserData)

  return (
    <main>
      <Switch fallback={<Hero />}>
        <Match when={user.state === "errored"}>
          Oh no
        </Match>
        <Match when={user.state === "pending"}>
          loading
        </Match>
      </Switch>
    </main>
  )
}
