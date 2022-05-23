export class Error {
    status: string;
    details: unknown;

    constructor(message: unknown) {
        this.status = "error";
        this.details = {
            "error": message
        };
    }
}

export class Success {
    status: string;
    details: unknown;

    constructor(details: unknown) {
        this.status = "Successful";
        this.details = details;
    }
}

