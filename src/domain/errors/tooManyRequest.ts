import { DomainError } from "./domain";

export class TooManyRequestsError extends DomainError {
    constructor(message: string) {
        super(message, 429);
    }
}