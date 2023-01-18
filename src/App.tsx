import { useFetch } from './hooks/useFetch'

import { GlobalStyles } from './styles/global'

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
    <div>
      <GlobalStyles />
      { isFetching && <strong>Loading...</strong>}
      { error ? (<h1>User not found D=</h1>) : (
        <>
          <h1>{user} repos</h1>
          {repositories?.map(repo => {
            return (
              <div>
                <strong>{repo.full_name}</strong>
                <p>{repo.description}</p>
                <br />
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

