import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;
    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        this.logger.log(`${method} ${url} +${Date.now() - start}ms`);
      }),
      catchError((err) => {
        const status = err instanceof HttpException ? err.getStatus() : 500;
        this.logger.error(
          `${method} ${url} ${status} +${Date.now() - start}ms`,
        );
        return throwError(() => err);
      }),
    );
  }
}
