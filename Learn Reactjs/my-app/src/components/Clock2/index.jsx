import useClock from '../../hooks/useClock';


const Clock2 = () => {
    const { timeString } = useClock();
    const style = {
        width: '100px',
        height: '50px',
        border: '1px solid red',
        color: 'white',
        margin: '0 auto',
        padding: '14px 0',
        backgroundColor: 'lightblue',
        borderRadius: '4px',
    }

    return (
        <div style={style}>
            {timeString}
        </div>
    );
}

export default Clock2;
