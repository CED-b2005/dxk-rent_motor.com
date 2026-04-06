import { MotorInfoEntity } from "../entity";
import { MotorInfoRepositoryI } from "../repository";

export class CreateMotorInfoUseCase {
    constructor(
        private readonly motorInfoRepository: MotorInfoRepositoryI,
    ) { }

    public async execute(motorInfo: MotorInfoEntity): Promise<void> {

    }
}