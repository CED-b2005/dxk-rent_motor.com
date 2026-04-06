import { DomainError } from "./domain";

export class ConflictError extends DomainError {
    constructor(message = "Conflict occurred") {
        super(message, 409);
    }
}