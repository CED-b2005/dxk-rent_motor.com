import { DomainError } from "./domain";

export class BadRequestError extends DomainError {
    constructor(message = "Bad request") {
        super(message, 400);
    }
}