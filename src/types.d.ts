export interface Event { event_interface: EventType, message: Message | null, user: string | null, timestamp: string, }
export enum EventType { Message, MessageEdit, MessageDelete, UserJoin, UserLeave, UserEdit }
export interface LoginRequest { email: string, password: string, }
export interface Message { author: string, content: string, timestamp: bigint, channel: string, }
export interface StatusResponse { db: boolean, cpu: number, mem: bigint, redis: boolean, tornado: boolean, }
export interface User { username: string, password: string, uuid: string, pfp: string, email: string, bio: string, }
