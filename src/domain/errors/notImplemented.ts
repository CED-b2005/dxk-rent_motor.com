import { DomainError } from "./domain";

export class NotImplementedError extends DomainError {
    constructor(message: string) {
        super(message, 501);
    }
}