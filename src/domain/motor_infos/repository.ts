import { MotorInfoEntity, MotorInfoUpdateI } from "./entity";

export interface MotorInfoRepositoryI {
    create(motorInfo: MotorInfoEntity): Promise<void>;
    update(motorInfoUpdate: MotorInfoUpdateI): Promise<void>;
    remove(id: string): Promise<void>;
    findAll(): Promise<MotorInfoEntity[]>;
    findOneById(id: string): Promise<MotorInfoEntity | null>;
}