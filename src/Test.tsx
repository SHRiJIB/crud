import React from 'react'

interface User {
    name:string,
    age?:string,
    gender?:string,
}
type Users = User[]; 
interface Props {
    Users : Users
}
const Test : React.FC<Props> = ({Users}) => {
//     const [users, setUsers] = useState<Users>([]);
//   const [userId, setUserId] = useState<string | number | null>(null);
console.log(Users);
    return (
        <div>
            <h1>TypeScript</h1>
            {Users.map((user,index)  => {
               return <div key={index}>
                    {user.name}
                    {user.age}
                    {user.gender}
                </div>
            })}
        </div>
    )
}

export default Test
