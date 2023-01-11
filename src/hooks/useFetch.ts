import { useState, useEffect } from "react"
import axios from "axios"

export const useFetch = <T = unknown>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get(url).then(response => {
            setData(response.data)
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])

    return { data, isFetching }
}