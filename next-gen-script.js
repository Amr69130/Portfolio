// Noise Canvas Animation
const noise = () => {
    let canvas, ctx;
    let wWidth, wHeight;
    let noiseData = [];
    let frame = 0;
    let loopTimeout;

    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        for (let i = 0; i < buffer32.length; i++) {
            if (Math.random() < 0.1) {
                buffer32[i] = 0xff000000;
            }
        }
        noiseData.push(idata);
    };

    const paintNoise = () => {
        if (frame === 9) frame = 0;
        ctx.putImageData(noiseData[frame], 0, 0);
        frame++;
    };

    const loop = () => {
        paintNoise();
        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, 1000 / 25);
    };

    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;
        canvas.width = wWidth;
        canvas.height = wHeight;
        for (let i = 0; i < 10; i++) createNoise();
        loop();
    };

    canvas = document.getElementById("noise");
    ctx = canvas.getContext("2d");
    setup();
};
noise();
