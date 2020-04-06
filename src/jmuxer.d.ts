declare class JMuxer {
    constructor(options: {
        node?: string,
        mode?: string, // both, audio, video
        flushingTime?: number,
        clearBuffer?: boolean,
        onReady?: null, // function called when MSE is ready to accept frames
        fps?: number,
        debug?: boolean,
    });
}

declare module "jmuxer" {
    export default JMuxer
}
