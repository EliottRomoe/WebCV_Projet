import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Api() {

    const [data, setData] = useState([])
    

    useEffect(() => {

        axios.get("http://localhost:3000/api/nbaPlayers")
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)

            })

    }, [])

    return (
        <div>
            <h1 className="ApiTitre">./Api!</h1>
            {data.map((item, index) => {
                if(index < 50){
                    return (
                        <p className="Api" key={index}>{item.player_name}</p>
                )}
            })}
        </div>
    )
}

export default Api

