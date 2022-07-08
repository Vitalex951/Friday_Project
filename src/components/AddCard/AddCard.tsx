import React, {useState} from "react"
import {FormAddCard} from "./FormAddCard";
import {UniverseModalWindow} from "../UniverseModal/UniverseModalWindow";
import style from "../TableCards/TableCards.module.css";

export const AddCard = () => {
    const [isActive,setIsActive] = useState<boolean>(false)
    return (
        <div>
            <button className={style.backBtn} onClick={()=>setIsActive(true)}>Add Card</button>
            <UniverseModalWindow isActive={isActive} setActive={setIsActive}><FormAddCard setIsActive={setIsActive}/></UniverseModalWindow>
        </div>
    )
}