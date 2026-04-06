import { DomainError } from "./domain";

export class InternalServerError extends DomainError {
    constructor(message = "Internal server error") {
        super(message, 500, false);
    }
}