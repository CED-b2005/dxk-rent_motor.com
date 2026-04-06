export class DomainError extends Error {
    public readonly statusCode: number | string;
    public readonly isOperational: boolean;

    constructor(
        message: string,
        statusCode: number | string,
        isOperational = true
    ) {
        super(message);

        this.name = new.target.name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        Error.captureStackTrace?.(this, this.constructor);
    }
}

export class GatewayTimeoutError extends DomainError {
    constructor(message: string) {
        super(message, 504);
        this.name = this.constructor.name;
    }
}


