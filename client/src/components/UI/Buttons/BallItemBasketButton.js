import React, {useContext} from 'react';
import basketPicture from "../../../Assets/Basket.png";
import {changeBasketBallCount, createBasketBall, getOneBasketBallCount} from "../../../http/BasketApi";
import {Context} from "../../../index";

const BallItemBasketButton = ({ballId}) => {

    const {user} = useContext(Context)

    const addingInBasket = (event) => {
        event.stopPropagation()

        getOneBasketBallCount(user.user.id,ballId).then(data => {
            if(data >= 1){
                // ===============ball=====count======================================================================================================
                changeBasketBallCount(user.user.id ,ballId, data+1).then(data => {
                    alert('Увеличено кол-во')
                })
            }
            else {
                createBasketBall(user.user.id, ballId).then(data => {
                    alert('Добавлено')
                })

            }
        })
    }

    return (
        <div className={'button ball_item_basket_button'} onClick={addingInBasket}>
            <div style={{marginRight: "5px"}}>В корзину</div>
            <img width={17.5}
                 height={17.5}
                 src={basketPicture}
            />
        </div>
    );
};

export default BallItemBasketButton;