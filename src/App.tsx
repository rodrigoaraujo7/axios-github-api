import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
import { useFetch } from './hooks/useFetch'

type Repository = {
  full_name: string,
  description: string
}

export const App = () => {
  let user: string = 'rodrigoaraujo7' 

  const {
    data: repositories,
    error,
    isFetching
  } = useFetch<Repository[]>(`users/${user}/repos`)

  return (
    <ul>
      { isFetching && <strong>Loading...</strong>}
      { error ? (<h1>Error D=</h1>) : (
        <>
          <h1>{user} repos</h1>
          {repositories?.map(repo => {
            return (
              <div>
                <li key={repo.full_name}>
                  <strong>{repo.full_name}</strong>
                  <p>{repo.description}</p>
                </li>
              </div>
            )
          })}
        </>
      )}
    </ul>
  )
}

