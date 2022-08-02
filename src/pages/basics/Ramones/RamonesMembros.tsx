import React from 'react';

type TRamonesMembers = {
    memberName: string;
}

export const RamonesMembers: React.FC<TRamonesMembers> = ({ memberName }) => {
    return (
        <div className='ramonesMembers'>
            { memberName }
        </div>
    )
}