import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"], //folosesc array pt ca un obiect <> de acelasi obiect {a:1} !== {a:1} pt ca in js obiectele sunt comparate prin referinta, nu prin valoare
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
