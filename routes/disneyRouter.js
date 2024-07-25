const express = require('express')
const disneyRouter = express.Router()
const Disney = require('../models/disneyCharacter')

disneyRouter.get('/', async(req, res, next) => {
     try {
         const foundDisney = await Disney.find()
         return res.status(200).send(foundDisney)
     } catch (error) {
         res.status(500)
         return next(error)
     }
})

disneyRouter.get('/:disneyId', async(req, res, next) => {
     try {
         const disneyId = req.params.disneyId
         const foundDisneyId = await Disney.findById(disneyId)
         console.log(disneyId)
         return res.status(200).send(foundDisneyId)
     } catch (error) {
         res.status(500)
         return next(error)
     }
})


disneyRouter.post("/", async(req, res, next) => {
     try {
         const newDisney = new Disney(req.body)
         const savedDisney = await newDisney.save()
         return res.status(201).send(savedDisney)
     } catch (error) {
         res.status(500)
         return next(error)
     }
})

disneyRouter.delete('/:disneyId', async(req, res, next) => {
     try {
         const disneyId = req.params.disneyId
         const deletedDisney = await Disney.findByIdAndDelete(disneyId)
         return res.status(200).send(`You have seccessfully deleted ${deletedDisney.name} information`)
     } catch (error) {
         res.status(500)
         return next(error)
     }
})

disneyRouter.put('/:disneyId', async(req, res, next) => {
     try {
         const disneyId = req.params.disneyId
         const updatedDisney = await Disney.findByIdAndUpdate(
           disneyId,
           req.body,
           {new:true}
         )
         return res.status(201).send(updatedDisney)
     } catch (error) {
      res.status(500)
      return next(error)
     }
})

module.exports = disneyRouter