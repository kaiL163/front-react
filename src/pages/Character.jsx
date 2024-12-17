import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import s from "./Character.module.scss";
import { useLocationById } from "../hooks/useLocationById";

export const Character = () => {
  const characterId = useParams();
  const { data: character, isFetched } = useCharacter(characterId?.characterId);
  const idLocation = character?.episode[0].split("/").pop()
  const { data: location} = useLocationById(idLocation)

  return (
    <>
      {isFetched && (
        <div className={s.header}>
          <img src={character?.image} className={s.img}></img>
          <div className={s.columnWrapper}>
            <div className={s.headerText}>{character?.name}</div>
            <div>● {character?.status} - {character?.species}</div>
          </div>
          <div className={s.columnWrapper}>
            <div className={s.smallHeaderText}>Last known location:</div>
            <div>{character?.location.name}</div>
          </div>
          <div className={s.columnWrapper}>
            <div className={s.smallHeaderText}>First seen in:</div>
            <div>{location?.name}</div>
          </div>
        </div>
      )}
    </>
  );
};
