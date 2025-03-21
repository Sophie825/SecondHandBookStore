import React from 'react';
import '../../../cards/listCard.css';

export default function Cards({ data }) {

    const getStatusColor = (status) => {
        switch (status) {
            case 1:
                return 'green';
            case 2:
                return 'gray';
            case 3:
                return 'red';
            default:
                return 'transparent';
        }
    };

    const statusColor = getStatusColor(data.status);

    return (
        <>
            <div className="allListCard">
                <div className="statusBar" style={{ backgroundColor: statusColor }}></div>
                <div className="container">
                    <h3><b>{data.name}</b></h3>
                    <p className='name-text'>登記者：{data.registrant}</p>
                    <p className='name-text'>負責人：{data.responsible}</p>
                    <p>備註：{data.note}</p>
                </div>
            </div>
        </>
    );
}
