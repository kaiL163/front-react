import { characters } from '../api/api'
import { useQuery } from '@tanstack/react-query'

export const useAllCharacters = (params) => {
    return useQuery({
        queryFn: () => characters.getAllCharacters(params),
        queryKey: ['characters', params],
        select: data => data.data
})
}