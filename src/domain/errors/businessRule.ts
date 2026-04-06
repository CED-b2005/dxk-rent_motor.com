import { DomainError } from "./domain";

export class BusinessRuleError extends DomainError {
    constructor(message: string) {
        super(message, 422);
    }
}