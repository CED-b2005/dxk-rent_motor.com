import { DomainError } from "./domain";

export class NotFoundError extends DomainError {
    constructor(resource = "Resource") {
        super(`${resource} not found`, 404);
    }
}