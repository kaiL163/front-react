import { location } from '../api/api'
import { useQuery } from '@tanstack/react-query'

export const useLocationById = (id) => {
    return useQuery({
        queryFn: () => location.getLocationById(id),
        queryKey: ['location', id],
        select: data => data.data
})
}