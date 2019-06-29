import React from "react";
import {
    AvatarCardImage,
    AvatarCardBody,
    AvatarContainer,
} from "../../../components/avatar-card/avatar_card";
import { TwoCards} from "../../../components/cards";
import { Query } from "react-apollo";
import { GET_CHEFIA } from "../../../utils/queries";

const chefias = [
    {
        Nome: "Vânia",
        Titulo: "Chefe",
        Ano: 2019,
        Foto: "", 
    },
    {
        Nome: "Valter",
        Titulo: "Vice-Chefe",
        Ano: 2019,
        Foto: "", 
    },
    {
        Nome: "Vânia",
        Titulo: "Chefe",
        Ano: 2019,
        Foto: "", 
    },
    {
        Nome: "Valter",
        Titulo: "Vice-Chefe",
        Ano: 2019,
        Foto: "", 
    },
    {
        Nome: "Vânia",
        Titulo: "Chefe",
        Ano: 2019,
        Foto: "", 
    },
    {
        Nome: "Valter",
        Titulo: "Vice-Chefe",
        Ano: 2019,
        Foto: "", 
    },
]

const GaleriaChefia = (
    <React.Fragment>
        <div className="row">
            <div className="col-md-8">
                <AvatarContainer>
                    <Query query={GET_CHEFIA}>
                        {({data, loading, error}) => {
                            if (loading) {
                            return <div />;
                            }
                            if (error) {
                            return `Error! ${error.message}`;
                            }

                            return data.chefias.sort(compare).map((chefia) => (
                                <TwoCards>
                                    <AvatarCardImage foto={chefia.Foto ? `${process.env.REACT_APP_API_URL}/${chefia.Foto.url}` : null}/>
                                    <AvatarCardBody nome={chefia.Nome}>
                                        {chefia.Titulo} <br/>
                                        <small className="p-0">{chefia.ano} - {chefia.ano + 1}</small>
                                    </AvatarCardBody>
                                </TwoCards>
                            ));
                        }}
                    </Query>
                </AvatarContainer>
            </div>
            <div className="col-md-4"/>
        </div>
    </React.Fragment>
);

function compare(a,b) {
    if (a.ano > b.ano) return -1;
    if (a.ano < b.ano) return 1;
    if (a.Titulo < b.Titulo) return -1;
    if (a.Titulo > b.Titulo) return 1;
    return 0; 
}

export default GaleriaChefia;