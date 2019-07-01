import React from "react";
import {
    AvatarCardImage,
    AvatarCardBody,
    AvatarContainer,
} from "../../../components/avatar-card/avatar_card";
import { TwoCards } from "../../../components/cards";
import { Query } from "react-apollo";
import { GET_CHEFIA } from "../../../utils/queries";

const GaleriaChefia = (
    <React.Fragment>
        <div className="row">
            <div className="col-md-8">
                <AvatarContainer>
                    <Query query={GET_CHEFIA}>
                        {({ data, loading, error }) => {
                            if (loading) {
                                return <div />;
                            }
                            if (error) {
                                return `Error! ${error.message}`;
                            }

                            return data.galeriachefias.sort(compare).map((chefia) => (
                                <TwoCards>
                                    <AvatarCardImage foto={chefia.Foto ? `${process.env.REACT_APP_API_URL}/${chefia.Foto.url}` : null} />
                                    <AvatarCardBody nome={chefia.Nome}>
                                        {chefia.Cargo === "chefia" ? "Chefe" : "Vice-chefe"} <br/>
                                        <small className="p-0">{chefia.Ano_inicio} - {chefia.Ano_fim}</small>
                                    </AvatarCardBody>
                                </TwoCards>
                            ));
                        }}
                    </Query>
                </AvatarContainer>
            </div>
            <div className="col-md-4" />
        </div>
    </React.Fragment>
);

function compare(a, b) {
    if (a.Ano_inicio > b.Ano_inicio) return -1;
    if (a.Ano_inicio < b.Ano_inicio) return 1;
    if (a.Titulo < b.Titulo) return -1;
    if (a.Titulo > b.Titulo) return 1;
    return 0;
}

export default GaleriaChefia;
