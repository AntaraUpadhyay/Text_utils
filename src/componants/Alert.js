import React from 'react';

export default function Alert(props) {
    const { alert } = props;

    if (!alert) {
        return null; // Return null if alert is null
    }

    const { type, msg } = alert;
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: '50px', overflow: 'hidden' }}>
            <div className={`alert alert-${type} alert-dismissible my-2 show container`} role="alert">
                <strong>Great!!</strong>: <strong>{capitalize(msg)}</strong>
            </div>
        </div>
    );
}
