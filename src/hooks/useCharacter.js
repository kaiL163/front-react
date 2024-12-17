import { characters } from '../api/api'
import { useQuery } from '@tanstack/react-query'

export const useCharacter = (id) => {
    return useQuery({
        queryFn: () => characters.getCharacterById(id),
        queryKey: ['character', id],
        enabled: !!id,
        select: data => data.data
})
}