import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface Envelope<T> {
    data: T;
    timestamp: string;
}
export declare class TransformInterceptor<T> implements NestInterceptor<T, Envelope<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Envelope<T>>;
}
