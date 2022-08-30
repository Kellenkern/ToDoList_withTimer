export default function timeToSec(time: string){
    const [hour = '0', min = '0', sec = '0'] = time.split(':')

    const hourToSec = Number(hour)*3600;
    const minToSec = Number(min)*60;

    return hourToSec + minToSec + Number(sec)
}