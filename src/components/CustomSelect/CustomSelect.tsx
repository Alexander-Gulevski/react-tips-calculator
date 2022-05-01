import Select, { StylesConfig } from 'react-select';
import { TipsOptions } from '../../types';

interface IProps {
    handleSelect: (option: TipsOptions | null) => void;
}

const CustomSelect = ({ handleSelect }: IProps) => {
    const colourStyles: StylesConfig<TipsOptions> = {
        control: styles => ({
            ...styles,
            padding: '13px',
            textAlign: 'center',
            borderRadius: '30px',
            border: 'none',
        }),
        singleValue: styles => ({
            ...styles,
            marginLeft: '37px',
            fontFamily: 'inherit',
            fontSize: '18px',
            lineHeight: '26px',
            letterSpacing: '-0.3px',
            color: '#756c6c',
        }),
    };
    const tipsOptions: TipsOptions[] = [
        { value: '10', label: '10%' },
        { value: '15', label: '15%' },
        { value: '20', label: '20%' },
    ];
    return (
        <Select
            options={tipsOptions}
            styles={colourStyles}
            defaultValue={tipsOptions[0]}
            isSearchable={false}
            onChange={handleSelect}
            isMulti={false}
        />
    );
};

export default CustomSelect;
