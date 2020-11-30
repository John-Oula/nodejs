#!/usr/bin/env node
const parseArgs = require("minimist")
const Timer = require("tiny-timer")
const {time} = parseArgs(process.argv)
const {stdout:log} = parseArgs("single-line-log")


if (time) {
    if (!parseInt(time)) {
        throw new Error('must be a number')
    }
    const count = parseInt(time)
    let msg = ""
    for (let i = 0; i < count; i++) {
        msg += '#'
    }
    const timer = new Timer([{interval: 1000, stopwatch: false}])
    timer.on("tick", () => {
        log(msg)
        msg = msg.slice(1)
    })
    timer.start(1000)
} else {

}

//
// Collect time from arg
//

//
// Print stars in-line
//

//
// Run a timer and remove stars
//