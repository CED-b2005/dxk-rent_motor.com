import { DomainError } from "./domain";

export class ValidationError extends DomainError {
    public readonly details?: any;

    constructor(message = "Validation failed", details?: any) {
        super(message, 400);
        this.details = details;
    }
}