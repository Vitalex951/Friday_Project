import React, {ChangeEvent} from 'react';
import {changePacksPageCountAC, changePacksPageAC} from "../../../redux/reducers/packsCardReducer";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {Pagination} from "@mui/material";

export const PaginationCards = () => {
    const pageCount = useAppSelector(state => state.packsCard.pageCount)
    const page = useAppSelector(state => state.packsCard.page)
    const cardPacksTotalCount = useAppSelector(state => state.packsCard.cardPacksTotalCount)

    const numberOfPages = Math.ceil(cardPacksTotalCount / pageCount)

    const dispatch = useAppDispatch()

    const changePageHandler = (event: ChangeEvent<unknown>, page: number) => {
        dispatch(changePacksPageAC(page))
    }

    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Pagination count={numberOfPages} page={page} color="primary" onChange={changePageHandler}/>
    </div>

}
