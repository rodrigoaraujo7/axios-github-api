import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import { useFetch } from './hooks/useFetch'

type Repository = {
  full_name: string,
  description: string
}

export const App = () => {
  const {
    data: repositories,
    error,
    isFetching
  } = useFetch<Repository[]>('users/rodrigoaraujo7/repos')

  return (
    <ul>
      { isFetching && <strong>Loading...</strong>}
      { error ? (<h1>Error D=</h1>) : (
        repositories?.map(repo => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })
      ) }
    </ul>
  )
}

