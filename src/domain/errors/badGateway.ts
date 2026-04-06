import { DomainError } from "./domain";

export class BadGatewayError extends DomainError {
    constructor(message: string) {
        super(message, 502);
    }
}