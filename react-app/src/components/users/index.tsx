import { useState, useEffect } from 'react'

//https://www.youtube.com/watch?v=dajPDWGJ75M&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=47
export const Users = () => {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setError('Error fetching users'))
  }, [])
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}