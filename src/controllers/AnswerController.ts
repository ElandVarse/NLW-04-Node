import { AppError } from './../errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Response, Request } from 'express';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnswerController {
    async execute(request: Request, response:Response){
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });
    
        if(!surveyUser){
            throw new AppError("Survey User does not exists!", 400)
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser)
    }
}

export { AnswerController }