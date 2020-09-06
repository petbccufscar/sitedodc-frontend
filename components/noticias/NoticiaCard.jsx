import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import {
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  CardImage,
  FourCards,
  TwoCards,
} from "../cards";

import { ImageLoader } from "../image-loader";

const NoticiaCard = ({ more, id, title, description, imagem, imageAlt, date }) => {
  let content = (
    <React.Fragment>
      <CardImage>
        {imagem && (
          <ImageLoader
            classnames={"card-img-top fit-image-noticia"}
            src={`${process.env.REACT_APP_API_URL}/${imagem.url}`}
            alt={imageAlt}
            loaderHeight="4rem"
          />
        )}
      </CardImage>
      <CardBody>
        <Link href={'/noticia/[id]'} as={`/noticia/${id}`}>
          <a>
          <CardTitle><b>{title}</b></CardTitle>
          <CardText>{description}</CardText>
          </a>
        </Link>
      </CardBody>
      <CardFooter>
        <small>{formatarData(date)}</small>
      </CardFooter>
    </React.Fragment>
  );
  return more ? (<FourCards>{content}</FourCards>) : (<TwoCards >{content}</TwoCards>);
};

function formatarData(data) {
  let formattedDate = format(new Date(data), "dddd, dd/MM/yyyy", {
    locale: pt,
  });
  return `Postado em: ${formattedDate}`;
}

export default NoticiaCard;
