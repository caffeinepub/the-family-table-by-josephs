import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { MenuCategory } from '../backend';

export function useGetMenuCategories() {
  const { actor, isFetching } = useActor();

  return useQuery<MenuCategory[]>({
    queryKey: ['menuCategories'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenuCategories();
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}
