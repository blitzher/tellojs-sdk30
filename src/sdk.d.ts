import { Socket } from "dgram";
import EventEmitter from "events";

type Position3D = { x: number; y: number; z: number };

/**
 * Custom typedefinitions of typeless library
 */

module "tellojs-sdk30";
const sdk = {
    control: {
        connect: () => Promise<string>,
        takeOff: () => Promise<string>,
        land: () => Promise<string>,
        emergency: () => Promise<string>,
        stop: () => Promise<string>,
        go: (end: Position3D, speed: number) => Promise<string>,
        curve: (start: Position3D, end: Position3D, speed: number) =>
            Promise<string>,
        jump: (
            start: Position3D,
            speed: number,
            yaw: number,
            mid1: string,
            mid2: string
        ) => Promise<string>,
        reboot: () => Promise<void>,
        move: {
            up: (cm: number) => Promise<string>,
            down: (cm: number) => Promise<string>,
            left: (cm: number) => Promise<string>,
            right: (cm: number) => Promise<string>,
            back: (cm: number) => Promise<string>,
            front: (cm: number) => Promise<string>,
        },
        rotate: {
            clockwise: (angle: number) => Promise<string>,
            counterClockwise: (angle: number) => Promise<string>,
        },
        flip: {
            left: () => Promise<string>,
            right: () => Promise<string>,
            front: () => Promise<string>,
            back: () => Promise<string>,
        },
        command: (cmd: string) => Promise<string>,
    },
    read: {
        speed: () => Promise<string>,
        battery: () => Promise<string>,
        time: () => Promise<string>,
        wifi: () => Promise<string>,
        height: () => Promise<string>,
        temperature: () => Promise<string>,
        attitude: () => Promise<string>,
        barometer: () => Promise<string>,
        tof: () => Promise<string>,
        acceleration: () => Promise<string>,
        sdk: () => Promise<string>,
    },
    set: {
        speed: (speed: number) => Promise<string>,
        rc: (x: number, y: number, z: number, yaw: number) => Promise<void>,
        wifi: (ssid: string, password: string) => Promise<string>,
        mon: () => Promise<string>,
        moff: () => Promise<string>,
        mdirection: (direction: number) => Promise<string>,
        ap: (ssid: string, pass: string) => Promise<string>,
        port: (info: number, video: number) => Promise<string>,
        setfps: (fps: "high" | "middle" | "low") => Promise<string>,
        setbitrate: (bitrate: number) => Promise<string>,
    },
    receiver: {
        state: {
            bind: () => EventEmitter,
            close: () => undefined,
        },
        video: {
            bind: () => Promise<EventEmitter>,
            close: () => Promise<void>,
        },
    },
    command: (command: string) => Promise<any>,
};
