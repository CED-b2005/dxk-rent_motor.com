import { DomainError } from "./domain";

export class ServiceUnavailableError extends DomainError {
    constructor(message = "Service unavailable") {
        super(message, 503, false);
    }
}