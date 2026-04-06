import { DomainError } from "./domain";

export class TimeoutError extends DomainError {
    constructor(message = "Request timeout") {
        super(message, 408);
    }
}