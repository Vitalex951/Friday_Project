import React, {useState} from "react"
import {FormAddPack} from "../FormAddPack/FormAddPack";
import {UniverseModalWindow} from "../UniverseModal/UniverseModalWindow";
import Button from "@mui/material/Button";

export const AddPack = () => {
    const [isActive,setIsActive] = useState<boolean>(false)
    return (
        <div >
            <Button onClick={()=>setIsActive(true)} variant="contained">Add Pack</Button>
            <UniverseModalWindow isActive={isActive} setActive={setIsActive}><FormAddPack setIsActive={setIsActive}/></UniverseModalWindow>
        </div>
    )
}