import useClock from '../../hooks/useClock';


const Clock = () => {
    const { timeString } = useClock();

    return (
        <div>
            {timeString}
        </div>
    );
}

export default Clock;
