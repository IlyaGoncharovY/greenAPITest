import React, {FC} from 'react';

interface MeMessageItemType {
    message: string
}

export const MeMessageItem: FC<MeMessageItemType> = ({message}) => {
    return (
        <div>
            Me - {message}
        </div>
    );
};

