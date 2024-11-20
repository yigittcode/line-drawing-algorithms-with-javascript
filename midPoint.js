function drawMidpointCircle(centerX, centerY, radius) {
    let canvas = document.getElementById("midpoint-circle-canvas");
    let ctx = canvas.getContext("2d");

    let x = radius;
    let y = 0;
    let decisionOver2 = 1 - x;   

    while (y <= x) {
        drawCirclePoints(ctx, centerX, centerY, x, y);
        y++;
        if (decisionOver2 <= 0) {
            decisionOver2 += 2 * y + 1;
        } else {
            x--;
            decisionOver2 += 2 * (y - x) + 1;
        }
        drawCirclePoints(ctx, centerX, centerY, x, y);
    }
}

function drawCirclePoints(ctx, centerX, centerY, x, y) {
    ctx.fillRect(centerX + x, centerY + y, 1, 1);
    ctx.fillRect(centerX - x, centerY + y, 1, 1);
    ctx.fillRect(centerX + x, centerY - y, 1, 1);
    ctx.fillRect(centerX - x, centerY - y, 1, 1);
    ctx.fillRect(centerX + y, centerY + x, 1, 1);
    ctx.fillRect(centerX - y, centerY + x, 1, 1);
    ctx.fillRect(centerX + y, centerY - x, 1, 1);
    ctx.fillRect(centerX - y, centerY - x, 1, 1);
}


drawMidpointCircle(100, 100, 50); /
