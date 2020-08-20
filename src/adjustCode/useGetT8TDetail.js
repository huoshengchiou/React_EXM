import { useState, useEffect, useRef } from 'react';
import { from } from 'rxjs';

//moment
import moment from 'moment';

import { getT8t } from 'apis/tournament';

export function useGetT8TDetail({ t8t_serial, apiWithTokenWrapper, ProcessFch }) {
    //holding club info
    const [FchBkHoldingCbInfo, setFchBkHoldingCbInfo] = useState({});
    //game info
    const [FchBkT8tInfo, setFchBkT8tInfo] = useState({});
    //next status and CDTime
    const [AboutNextStatus, setAboutNextStatus] = useState(null);
    //visitor associate status
    const [GamerRegStatus, setGamerRegStatus] = useState({});
    const fetchUserRegStatus = useRef(null)
    //fetch Reg Id
    const [GamerRegId, setGamerRegId] = useState(null);
    //fch signal
    const [IsT8TFchOK, setIsT8TFchOK] = useState(false);
    // //第一次運行開通//後續切on off 模式
    // const firstRunRef = useRef(true);

    //比對狀態改變才調動state
    const pregamestatusref = useRef('');

    // --------------B model-----S-----ref------

    // const BfCheckTime = useRef(0)
    const CheckInTime = useRef(null);
    const CheckETime = useRef(null);
    //ori counttime
    const OriRegEtime = useRef(null);
    //Ckin left time
    const CheckInLeftTime = useRef(null);
    //left days before game start
    const leftDays = useRef(null)
    const gameNeedsCK = useRef(null)
    const isUserCkGame = useRef(null)

    // --------------B model-----E-----------

    //Rxjs observer
    const fetchListener = useRef();

    //TODO 未登入狀態下，不送TOKEN//利用api調控
    function fetchT8TDetail(data) {
        setIsT8TFchOK(false);
        fetchListener.current = from(
            apiWithTokenWrapper(getT8t, data)
        ).subscribe((response) => {
            if (response.status === 200) {
                const { header, body } = response.data;
                if (header.status.toUpperCase() === 'OK') {
                    console.log('拿到比賽資料', body.t8t);
                    //TODO狀態一樣停止更新 //但如果遇到同樣的狀態更新時間就會拿不到
                    if (pregamestatusref.current === body.t8t.status) return;

                    if (body.t8t.myself.participant) {
                        if (body.t8t.tournament_format === '1v1') {
                            setGamerRegId(
                                body.t8t.myself.participant.t8t_player_id
                            );
                        } else {
                            setGamerRegId(
                                body.t8t.myself.participant.t8t_team_id
                            );
                        }
                    }
                    fetchUserRegStatus.current = body.t8t.myself.participant
                    gameNeedsCK.current = body.t8t.is_t8t_checkin
                    isUserCkGame.current = body.t8t.myself.participant.is_user_checkin


                    //type change for time string
                    const timeToNext = (body.t8t.seconds_to_status * 1) * 1000;
                    console.log('timeToNext', timeToNext)

                    //當狀態走到registration_closed後走B model
                    if (body.t8t.status === 'registration_closed') {

                        //TODO如果is_t8t_checkin為false 走回A model
                        // if (!body.is_t8t_checkin) {
                        //     //A model
                        //     console.log('走A model');
                        //     // TODO 關於時間一律轉為 num
                        //     const obj = {
                        //         status: body.t8t.status,
                        //         t8t_checkin_mins: body.t8t.t8t_checkin_mins,
                        //         //str to num
                        //         seconds_to_status: body.t8t.seconds_to_status * 1,
                        //     };
                        //     //TODO when body.t8t.status ===reg finish 走不同的倒數機制
                        //     // console.log('gameInfo', gameInfo)
                        //     //Reg結束到比賽前的時間計算  //ms To days
                        //     let duration = moment.duration(body.t8t.seconds_to_status * 1, 'milliseconds').asDays()
                        //     leftDays.current = Math.ceil(duration)
                        //     setAboutNextStatus(obj);
                        //     setGamerRegStatus(body.t8t.myself.participant);
                        //     setFchBkHoldingCbInfo(body.t8t.t8t_lite.club);
                        //     setFchBkT8tInfo(body.t8t);
                        // }

                        //TODO 如果處於is_t8t_checkin為false狀態走一樣的秒數處理機制，利用context內的switch進行第二段timer處理


                        console.log('走 registration_closed 計算模式')
                        // TODO當剩餘秒數少於預劃秒數應該要給一個signal，處理不同計算

                        //t8t_checkin_mins 另外處理    trans java give longStr to num

                        const RegEtoOngo = body.t8t.seconds_to_status * 1;
                        //Checkin limit time (ms)
                        const Checklimit = 60 * 60 * 1000;
                        const CheckBfOngo =
                            body.t8t.t8t_checkin_mins * 60 * 1000;
                        //give to ref
                        CheckInTime.current = Checklimit;
                        CheckETime.current = CheckBfOngo;
                        //keep ori time for no Reg or is_t8t_checkin(false)
                        OriRegEtime.current = RegEtoOngo;
                        const obj = {
                            status: body.t8t.status,
                            seconds_to_status:
                                RegEtoOngo - (Checklimit + CheckBfOngo),
                            CkFin: false,
                            RegStatus: body.t8t.myself.participant,
                        };
                        //如果處於CkIn階段把第一timer需要秒數歸0
                        if (
                            RegEtoOngo > CheckBfOngo &&
                            RegEtoOngo < Checklimit + CheckBfOngo
                        ) {
                            // 計算CkIn階段剩餘時間
                            CheckInLeftTime.current = RegEtoOngo - CheckBfOngo;

                            obj.seconds_to_status = 0;
                        }
                        //如果處於CkIn結束階段一樣把秒數歸0在Next state加入一個狀態
                        if (
                            RegEtoOngo === CheckBfOngo ||
                            CheckBfOngo < CheckBfOngo
                        ) {
                            obj = { ...obj, seconds_to_status: 0, CkFin: true };
                        }
                        let duration = moment.duration(body.t8t.seconds_to_status * 1, 'milliseconds').asDays()
                        leftDays.current = Math.ceil(duration)
                        console.log('obj', obj)
                        console.log('CheckInLeftTime.current', CheckInLeftTime.current)
                        setAboutNextStatus(obj);
                        //持續同步info
                        // setGamerRegStatus(body.t8t.myself.participant);
                        setFchBkHoldingCbInfo(body.t8t.t8t_lite.club);
                        setFchBkT8tInfo(body.t8t);
                    } else {
                        //A model
                        console.log('走 registration_closed 以外計算模式');
                        // TODO 關於時間一律轉為 num
                        const obj = {
                            status: body.t8t.status,
                            t8t_checkin_mins: body.t8t.t8t_checkin_mins,
                            //str to num
                            seconds_to_status: timeToNext,
                        };
                        //TODO when body.t8t.status ===reg finish 走不同的倒數機制
                        // console.log('gameInfo', gameInfo)
                        //Reg結束到比賽前的時間計算  //ms To days
                        let duration = moment.duration(timeToNext, 'milliseconds').asDays()
                        leftDays.current = Math.ceil(duration)
                        // setGamerRegStatus(body.t8t.myself.participant);
                        setFchBkHoldingCbInfo(body.t8t.t8t_lite.club);
                        setFchBkT8tInfo(body.t8t);
                        setAboutNextStatus(obj);

                    }
                    setIsT8TFchOK(true);
                    // 初始啟動後關閉
                    // firstRunRef.current = false;
                }
            }
        });
    }
    //啟動第一次fetch後走on off 機制
    useEffect(() => {
        if (!ProcessFch) return
        fetchT8TDetail({ t8t_serial });

        return () => {
            //取消fetch監聽
            if (fetchListener.current) fetchListener.current.unsubscribe();
        };
    }, [ProcessFch]);

    return {
        FchBkHoldingCbInfo,
        IsT8TFchOK,
        FchBkT8tInfo,
        AboutNextStatus,
        GamerRegStatus,
        CheckInTime,
        CheckETime,
        GamerRegId,
        OriRegEtime,
        CheckInLeftTime,
        leftDays,
        fetchUserRegStatus,
        gameNeedsCK,
    };
}

