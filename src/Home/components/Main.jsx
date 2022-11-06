import { Axios } from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function Main() {
    const [match, setMatch] = useState(null);

    useEffect(() => {
        fetch("https://v3.football.api-sports.io/widgets/standings", {
        method: "GET",
        contentType: "application/json",
        headers: {
            "x-rapidapi-key": "678770c1f8b16bb6b897a427724f5ac8",
            "x-rapidapi-host": "v3.football.api-sports.io",
        },
    })
        .then((response) => response.json())
        .then((data) => {
        console.log(data.response);
        setMatch(data.response);
    })
    .catch((error) => {
        console.error("error", error);
    });
    }, []);

    return(
        <div>
            <div>
                <h1>Football</h1>
                {match && match.map((match) => (
                    <div>
                        <h2>{match.league.name}</h2>
                        <h3>{match.league.country}</h3>
                        <h4>{match.league.season}</h4>
                        <h5>{match.league.round}</h5>
                        <h6>{match.league.logo}</h6>
                    </div>
                ))}
            </div>
        </div>

    )
}