const {BasketBall, Ball} = require('../models/models')
const ApiError = require('../error/apiError')

class BasketBallController {
    async Create(request,response,next){
        try {
            const {ballId,basketId} = request.body

            if (ballId && basketId) {
                const basketBall = await BasketBall.create({ballId, basketId})
                return response.json(basketBall)
            }
            else {
                return next(ApiError.BadRequest('Некорекктно введены данные'))
            }
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async UpdateCount(request,response,next){
        try {
            const {id} = request.params
            const {count} = request.body

            if (!id)
                return next(ApiError.BadRequest("Такого элемента не существует"))

            const isChangedRaws = await BasketBall.update({count: count},{where: {id}})

            if (isChangedRaws > 0)
            {
                const basketBall = await BasketBall.findOne({where: {id}})
                return response.json(basketBall.count)
            }
            else
                return next(ApiError.BadRequest("Не нашлось, что надо менять"))
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }


    async GetAll(request,response,next){
        try {
            const {basketId} = request.query

            const baskets = await BasketBall.findAll({
                where: {basketId},
                include: {model: Ball, as: 'ball'}
            })
            return response.json(baskets)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetOne(request,response,next){
        try {
            const {id} = request.params

            const basketBall = await BasketBall.findOne({where: {id}})

            return response.json(basketBall)
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetAllCount(request,response,next){
        try {
            const basketBallCount = await BasketBall.count()

            return response.json(basketBallCount)
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetOneBallCount(request,response,next){
        try {
            const {ballId} = request.query

            const basketBall = await BasketBall.findOne({where: {ballId}})

            if (basketBall)
                return response.json(basketBall.count)
            else
                return response.json(0)
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.query

            await BasketBall.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new BasketBallController()