import { InternalServerError, NotFoundError } from "@domain/errors";
import { MotorInfoRepositoryI } from "../repository";

export class FindOneByIdMotorInfoUseCase {
    constructor(
        private readonly motorInfoRepository: MotorInfoRepositoryI,
    ) { }

    public async execute(id: string) {
        try {
            const motorInfo = await this.motorInfoRepository.findOneById(id);
            if (!motorInfo) {
                throw new NotFoundError("Motor info not found");
            }
            return motorInfo;
        } catch (error: unknown) {
            throw new InternalServerError((error as Error).message);
        }
    }
}