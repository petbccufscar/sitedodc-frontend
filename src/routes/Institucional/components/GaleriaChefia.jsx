import React, { Component } from "react";
import {
    AvatarCardImage,
    AvatarCardBody,
    AvatarContainer,
} from "../../../components/avatar-card/avatar_card";
import { ThreeCards } from "../../../components/cards";
import { Query } from "react-apollo";
import { GET_CHEFIA } from "../../../utils/queries";

const chefias = [
    {
        Nome: "Vânia Neris",
        Foto: "https://api.dc.ufscar.br//uploads/7a6d19b3e2794ed8b2ab12428c049a9e.png"
    },
    {
        Nome: "Vânia Neris",
        Foto: "https://api.dc.ufscar.br//uploads/7a6d19b3e2794ed8b2ab12428c049a9e.png"
    },
    {
        Nome: "Vânia Neris",
        Foto: "https://api.dc.ufscar.br//uploads/7a6d19b3e2794ed8b2ab12428c049a9e.png"
    },
    {
        Nome: "Vânia Neris",
        Foto: "https://api.dc.ufscar.br//uploads/7a6d19b3e2794ed8b2ab12428c049a9e.png"
    },
    {
        Nome: "Vânia Neris",
        Foto: "https://api.dc.ufscar.br//uploads/7a6d19b3e2794ed8b2ab12428c049a9e.png"
    },
    {
        Nome: "Vânia Neris",
        Foto: "https://api.dc.ufscar.br//uploads/7a6d19b3e2794ed8b2ab12428c049a9e.png"
    },
    {
        Nome: "Vânia Neris",
        Foto: "https://api.dc.ufscar.br//uploads/7a6d19b3e2794ed8b2ab12428c049a9e.png"
    },
    {
        Nome: "Vânia Neris",
        Foto: "https://api.dc.ufscar.br//uploads/7a6d19b3e2794ed8b2ab12428c049a9e.png"
    }
]

const GaleriaChefia = (
    <React.Fragment>
        <AvatarContainer>
            <Query query={GET_CHEFIA}>
                {({loading, error, data}) => {
                    if (loading) {
                    return <div />;
                    }
                    if (error) {
                    return `Error! ${error.message}`;
                    }

                    return data.chefias.map((chefia) => (
                        <ThreeCards>
                            <AvatarCardImage foto={chefia.Foto ? `${process.env.REACT_APP_API_URL}/${chefia.Foto.url}` : null}/>
                            <AvatarCardBody nome={chefia.Nome}>
                                {/* TODO: colocar as outras info da chefia */}
                            </AvatarCardBody>
                        </ThreeCards> 
                    ));
                }}
            </Query>
            
        </AvatarContainer>
    </React.Fragment>
);

export default GaleriaChefia;