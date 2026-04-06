import { DomainError } from "./domain";

export class UnauthorizedError extends DomainError {
    constructor(message = "Unauthorized") {
        super(message, 401);
    }
}