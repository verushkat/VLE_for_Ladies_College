import { SocketEventType } from './socket-event-type.enum';

export interface SocketEvent {
  event: SocketEventType;
  sessionId?: number;
  paperId?: string;
  marks?: string;
  paperData?: any;
  drawing?: string;
  url?: string;
}

