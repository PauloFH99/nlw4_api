import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUSer";

@EntityRepository(SurveyUser)
class SurveysUserRepository extends Repository<SurveyUser>{
    
}

export {SurveysUserRepository}