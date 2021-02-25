import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { SurveyUser } from '../models/SurveyUser';

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser>{
    
}

export { SurveysUsersRepository }