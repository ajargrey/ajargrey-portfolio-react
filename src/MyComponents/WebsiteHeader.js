import React from 'react';

const WebsiteHeader = () => {
    return (
        <div
            className="d-flex align-items-center"
            style={{
                backgroundColor: 'black',
                color: 'white',
                width: '100%',
                padding: '1rem 2rem',
                boxSizing: 'border-box',
            }}
        >
            {/* Left: "AJAY" with designation */}
            <div
                className="d-flex align-items-center"
                style={{
                    fontFamily: 'ProximaNovaCondensedBlack, sans-serif',
                }}
            >
                <h1
                    style={{
                        color: 'red',
                        fontWeight: 'bold',
                        margin: 0,
                        fontSize: '3rem',
                    }}
                >
                    AJAY
                </h1>

                <span
                    style={{
                        color: 'white',
                        fontSize: '4rem',
                        marginLeft: '1rem',
                        animation: 'blink 1s step-end infinite',
                    }}
                >
                    |
                </span>

                <span
                    style={{
                        fontSize: '2rem',
                        marginLeft: '1rem',
                        color: 'white',
                    }}
                >
                    AI & Gameplay Engineer
                </span>

            </div>
        </div>
    );
};

export default WebsiteHeader;