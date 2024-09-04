const Count = (prop: { count: number }) => {
    return (
        <div className="counter--count">
            <h1>
                {prop.count}
            </h1>
        </div>
    );
};

export default Count;