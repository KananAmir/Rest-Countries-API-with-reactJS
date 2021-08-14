import React from 'react'
import './SearchFilter.scss'
import { Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ChangeEvent } from 'react'

interface IProps {
	handleChangeSearchInput: (inputText: string) => void;
}
const SearchFilter = (props: IProps) => {
    const onChangeSearchCountry = (event: ChangeEvent<HTMLInputElement>) => {
		props.handleChangeSearchInput(event.target.value);
    }
    return (
        <div className="search-filter">
                <Input
                    className="search-country"
                    placeholder="Search for a country.."
                    prefix={<SearchOutlined />}
				    onChange={onChangeSearchCountry} />
                		<div>
				<Select allowClear className="filter-by-region" placeholder="Filter by the Region">
					<Select.Option value="africa">Africa</Select.Option>
					<Select.Option value="america">America</Select.Option>
					<Select.Option value="asia">Asia</Select.Option>
					<Select.Option value="europe">Europe</Select.Option>
					<Select.Option value="oceania">Oceania</Select.Option>
				</Select>
			</div> 
        </div>
    )
}

export default SearchFilter
