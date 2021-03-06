import { Sonos } from "sonos";

const device = new Sonos("192.168.110.175");

export const currentTrack = () => device.currentTrack();

export const getQueue = () => device.getQueue();

export const getCurrentState = () => device.getCurrentState();
