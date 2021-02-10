import React, {useEffect, useState} from "react";

import {fromEvent, interval} from "rxjs";
import {buffer, debounceTime, filter, map, takeUntil} from "rxjs/operators";

import Buttons from "./Components/Buttons/Buttons";
import TimerDisplay from "./Components/TimerDisplay/TimerDisplay";

import "./RxJS-Timer.css";


export default function RxJsTimer() {

    useEffect(() => {

        const timerInterval$ = interval(1000)

        const timer$ = fromEvent(document.getElementById('startBtn'), 'click')

        const timerReset$ = fromEvent(document.getElementById('resetBtn'), 'click')

        const timerStop$ = fromEvent(document.getElementById('stopBtn'), 'click')

        const timerWaitClick$ = fromEvent(document.getElementById('waitBtn'), 'click')

        const timerWait$ = timerWaitClick$.pipe(
            buffer(
                timerWaitClick$
                    .pipe(debounceTime(250))),
            map(click => click.length),
            filter(clickLength => clickLength >= 2)
        );

        function runTimerInterval() {
            timerInterval$
                .pipe(
                    takeUntil(timerWait$),
                    takeUntil(timerReset$),
                    takeUntil(timerStop$)
                ).subscribe(
                () => runTimer()
            )
        }

        timerWait$
            .subscribe(() => {
                    startBtnDisabled(false)
                }
            )

        timerStop$.subscribe(() => {
                startBtnDisabled(false)
                resetTimer()
            }
        )

        timerReset$.subscribe(() => {
                startBtnDisabled(true)
                resetTimer()
                runTimerInterval()
            }
        )

        timer$.subscribe(() => {
            startBtnDisabled(true)
            runTimerInterval()
        })

    }, [])

    const [time, setTime] = useState({s: 0, m: 0, h: 0});

    let updatedS = time.s,
        updatedM = time.m,
        updatedH = time.h;

    function startBtnDisabled(isDisabled) {
        if (isDisabled) {
            document.getElementById('startBtn').style.display = 'none';
            document.getElementById('stopBtn').style.display = 'initial'
        } else {
            document.getElementById('startBtn').style.display = 'initial';
            document.getElementById('stopBtn').style.display = 'none'
        }
    }

    function resetTimer() {

        updatedS = 0;
        updatedM = 0;
        updatedH = 0;

        return setTime({s: updatedS, m: updatedM, h: updatedH});
    }

    function runTimer() {

        updatedS++;

        if (updatedS >= 60) {
            updatedM++;
            updatedS = 0;
        }

        if (updatedM >= 60) {
            updatedH++;
            updatedM = 0;
        }

        return setTime({s: updatedS, m: updatedM, h: updatedH});
    }

    return (
        <>
            <div className='rxjs-timer-container'>
            <div className='page-background'></div>
            <div className='timer-container'>
                <TimerDisplay time={time}/>
                <Buttons/>
            </div>
            </div>
        </>
    );
}
