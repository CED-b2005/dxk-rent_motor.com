import { DomainError } from "./domain";

export class ForbiddenError extends DomainError {
    constructor(message = "Forbidden") {
        super(message, 403);
    }
}