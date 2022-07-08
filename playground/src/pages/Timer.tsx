type TimerProps = {
    date: Date
}

export function Timer(props: TimerProps) {
    return (
        <>
            <h1>{props.date.toLocaleString()}</h1>
        </>
    )
}