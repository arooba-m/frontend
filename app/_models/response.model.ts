export interface ResponseVM <T> {
    statusCode: string;
    message: string;
    responseData: T;
}