import React, { useEffect, useState } from "react";

function ContactComponent() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => setUser(res))   
        }, 3000);
   
    })
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
            {user.map((users) =>
                <tr>
                    {user.count === 0 && <td>Loading data......</td>}
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.phone}</td>
                    <td>{users.website}</td>
                </tr>
            )
            }
        </table>
        // <div>
        //     <div>
        //         {user.map(users => (
        //             <div className="contact">
        //                 {users.name}
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );
}
export default ContactComponent;