import React, { useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { pickerStyle, PickerIcon } from './SortDebtsSelect.styles';
import { SortDebtsContext } from 'providers/SortDebtsProvider';

export const SortDebtsSelect = () => {
    const { sortType, setSortType } = useContext(SortDebtsContext);

    return (
        <RNPickerSelect
            style={pickerStyle}
            value={sortType}
            placeholder={{}}
            onValueChange={(value) => setSortType(value)}
            useNativeAndroidPickerStyle={false}
            items={[
                { label: 'Sortowanie: Alfabetyczne', value: 'alphabetically' },
                { label: 'Sortowanie: wg. długu rosnąco', value: 'ascending' },
                { label: 'Sortowanie: wg. długu malejąco', value: 'descending' },
            ]}
            Icon={() => {
                return <PickerIcon name="down"/>;
            }}
        />
    );
}