export class LoggingService {
  lastLog: string;
  printLog(message: string) {
    this.lastLog = message;
  }
}
