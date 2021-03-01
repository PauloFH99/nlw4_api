import {  Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';

class SurveysController{
    async create(request: Request, response: Response) {
        const {title,description} = request.body;

        const surveryRepository = getCustomRepository(SurveysRepository);

        const survey = surveryRepository.create({
            title,
            description
        });

        await surveryRepository.save(survey);

        return response.status(201).json(survey);
    }

    async show(request: Request, response: Response){
        const surveryRepository = getCustomRepository(SurveysRepository);
        
        const all = await surveryRepository.find();
        
        return response.json(all);
    }
}

export {SurveysController};